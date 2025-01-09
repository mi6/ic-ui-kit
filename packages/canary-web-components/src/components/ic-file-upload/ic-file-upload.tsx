import {
    Component,
    Element,
    Prop,
    Event,
    EventEmitter,
    State,
    h,
} from "@stencil/core";
import fileUpload from "../../assets/file-upload.svg";
import { renderFileHiddenInput } from "../../utils/helpers"

@Component({
    tag: "ic-file-upload",
    styleUrl: "ic-file-upload.css",
    shadow: true,
})
export class IcFileUpload {
    @Element() el: HTMLIcFileUploadElement;

    @State() uploadedFiles: File[] = [];
    @State() isDragging: boolean = false;
    @State() activeClassName: string = '';
    @State() activeInternalClassName: string = '';
    /**
   * If `true`, the file upload component will fit the size of the container.
   */
    @Prop() fitContainer?: boolean = true;
    /**
   * The text displayed between the browse button and the upload icon.
   */
    @Prop() uploadText?: string = 'Drag and drop files here';
    /**
   * The name of the control for the file input, which is submitted with the form data.
   */
    @Prop() fileInputName: string = `file-upload-internal`;
    /**
   * This is the accepted list of file types.
   */
    @Prop() accept?: string = "*";
    /**
   * This boolean determines whether multiple files are accepted.
   */
    @Prop() multiple?: boolean = false;

    @Event() onUpload: EventEmitter<File[]>;

    private updateActiveClassNames() {
        if (this.isDragging) {
            this.activeClassName = this.fitContainer ? 'full-size-dragging' : 'dragging';
            this.activeInternalClassName = 'file-upload-internal-dragging'
        } else {
            this.activeClassName = this.fitContainer ? 'full-size' : 'file-upload-default';
            this.activeInternalClassName = 'file-upload-internal'
        }
    }

    //when a user drags a file over the component
    handleDragEnter(event: DragEvent) {
        event.preventDefault()
        this.isDragging = true;
        this.updateActiveClassNames();
    }

    //when a user stops dragging a file over the component
    handleDragLeave(event: DragEvent) {
        const target = event.target as HTMLElement;
        if (!this.el.contains(target)) {
            this.isDragging = false;
            this.updateActiveClassNames();
        }
    }

    //when a user releases/drops a file over the component
    handleDrop(event: DragEvent) {
        event.preventDefault();
        this.isDragging = false;

        if (event.dataTransfer && event.dataTransfer.files.length > 0) {
            const files = event.dataTransfer.files;
            this.processFiles(files);
        }
    }


    private processFiles(files: FileList) {
        const inputs = this.el.querySelectorAll("input.ic-input");
        const inputEls = Array.from(inputs);
        const filtered = inputEls.filter((el) => this.el === el.parentElement);

        let inputElement = filtered[0] as HTMLInputElement;
        console.log(inputElement)
        const dataTransfer = new DataTransfer();
        for (let i = 0; i < files.length; i++) {
            dataTransfer.items.add(files[i])
        }

        inputElement.files = dataTransfer.files;
    }

    render() {
        renderFileHiddenInput(
            this.onUpload,
            this.el,
            true,
            this.fileInputName,
            false,
            this.accept
        );
        this.updateActiveClassNames();
        let { uploadText, isDragging } = this
        return (
            <div
                class={this.activeClassName}
                onDragEnter={(event) => this.handleDragEnter(event)}
                onDragLeave={(event) => this.handleDragLeave(event)}
                onDrop={(event) => this.handleDrop(event)}
                onDragOver={(event) => event.preventDefault()}
            >
                <div class={this.activeInternalClassName}>
                    <span class="upload-icon-container" slot="icon" innerHTML={fileUpload} />
                    <ic-typography>
                        {uploadText}
                    </ic-typography>
                    <ic-button
                        variant="secondary"
                        disabled={isDragging}
                        file-upload="true"
                        multiple={true}
                        accept=".doc, text/plain, .json, .png"
                    >
                        Browse
                    </ic-button>
                </div>
            </div>
        );
    }
}