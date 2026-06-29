import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o=e({AriaLiveBehaviour:()=>T,Autofocus:()=>h,CustomWidth:()=>b,Default:()=>m,Disabled:()=>S,Form:()=>D,FullWidth:()=>x,HelperText:()=>_,Internationalisation:()=>M,LoggingIcChange:()=>k,LoggingIcKeydown:()=>A,MaximumAndMinimumCharacters:()=>j,MinAndMax:()=>O,PlaceholderAndRequired:()=>g,Playground:()=>P,ReadOnly:()=>C,TextAreaWithResize:()=>E,Validation:()=>w,WithIcon:()=>v,WithValue:()=>y,__namedExportsOrder:()=>F,default:()=>f}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=t((()=>{n(),i(),f={title:`Web Components/Text field`,component:`ic-text-field`},p={debounce:0,disabled:!1,fullWidth:!1,helperText:``,hideCharCount:!1,hideLabel:!1,inputId:`ic-text-field-input-0`,inputmode:`text`,label:`Text Field`,max:0,maxCharacters:0,maxCharactersMessage:`Custom max characters validation message`,maxMessage:`Custom max validation message`,min:0,minCharacters:0,minCharactersMessage:`Custom min characters validation message`,minMessage:`Custom min validation message`,name:`0`,placeholder:``,readonly:!1,required:!1,resize:!1,rows:1,size:`medium`,spellcheck:!1,theme:`inherit`,type:`text`,validationAriaLive:`default`,validationInline:!1,validationStatus:`no status`,validationText:``,value:``},m={render:()=>r`<ic-text-field label="What is your favourite coffee?"> </ic-text-field>
      <ic-text-field rows="6" label="What is your favourite coffee?">
      </ic-text-field>`,name:`Default`},h={render:()=>r`<ic-text-field autofocus label="What is your favourite coffee?">
    </ic-text-field>`,name:`Autofocus`},g={render:()=>r`<ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      >
      </ic-text-field>
      <ic-text-field
        rows="6"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      >
      </ic-text-field> `,name:`Placeholder and required`},_={render:()=>r`<ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field>
      <ic-text-field
        rows="6"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field>
      <ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      >
        <ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-text-field>`,name:`Helper text`},v={render:()=>r`<ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,name:`With icon`},y={render:()=>r`<ic-text-field
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,name:`With value`},b={render:()=>r`<style>
        ic-text-field {
          --input-width: 400px;
        }
      </style>
      <ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        resize
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,name:`Custom width`},x={render:()=>r`<div style="display: flex">
        <ic-text-field
          full-width="true"
          value="Arabica"
          max-characters="25"
          label="What is your favourite coffee?"
          size="small"
          required="true"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
      </div>
      <ic-text-field
        full-width="true"
        rows="6"
        value="Arabica"
        max-characters="25"
        resize
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,name:`Full width`},S={render:()=>r`<ic-text-field
        value="Arabica"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        value="Arabica"
        rows="6"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> `,name:`Disabled`},C={render:()=>r`<ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field> `,name:`Read only`},w={render:()=>r`<ic-text-field
        validation-status="success"
        validation-text="Good choice!"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="success"
        validation-text="Good choice!"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta, Liberica or something else to make this label long"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="success"
        validation-text="Good choice!"
        validation-inline="true"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="success"
        validation-text="Good choice!"
        validation-inline="true"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        size="small"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="warning"
        validation-text="A very long warning message to test if wrapping works"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="warning"
        validation-text="A very long warning message to test if wrapping works"
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea with milk and 2 sugars"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea with milk and 2 sugars"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="6"
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
        required
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="0"
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
        required
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="I'm not familiar with this type of coffee"
        validation-inline-internal="true"
        value="Milkshake"
        label="What is your favourite coffee?"
        required
        hide-label
        size="small"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      ></ic-text-field>
      <ic-text-field
        label="What is your favourite slotted coffee?"
        validation-status="error"
        placeholder="Placeholder"
      >
        <ic-typography variant="caption" slot="validation-text">
          <span>
            Slotted validation text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-text-field>`,name:`Validation`},T={render:()=>r(s||=a([`<ic-text-field
        id="field-1"
        label="What is your favourite coffee?"
        helper-text="Error already set on page load"
        validation-status="error"
        validation-text="First error message"
      ></ic-text-field>
      <br />
      <ic-text-field
        id="field-2"
        label="What is your favourite coffee?"
        helper-text="Error set after page load"
      ></ic-text-field>
      <br />
      <ic-button id="toggle-btn-1">Toggle errors</ic-button>
      <script>
        let showErrors1 = false;
        const btn1 = document.getElementById("toggle-btn-1");
        const field1 = document.getElementById("field-1");
        const field2 = document.getElementById("field-2");

        btn1.addEventListener("click", () => {
          showErrors1 = !showErrors1;

          field1.setAttribute("validation-status", showErrors1 ? "" : "error");
          field1.setAttribute(
            "validation-text",
            showErrors1 ? "" : "First error message"
          );

          field2.setAttribute("validation-status", showErrors1 ? "error" : "");
          field2.setAttribute(
            "validation-text",
            showErrors1 ? "Second error message" : ""
          );
        });
      <\/script>
      <br />
      <br />
      <br />
      <br />
      <ic-text-field
        id="field-3"
        label="What is your favourite coffee?"
        helper-text="aria-live overridden as 'polite'"
        validation-aria-live="polite"
      ></ic-text-field>
      <br />
      <ic-text-field
        id="field-4"
        label="What is your favourite coffee?"
        helper-text="aria-live overridden as 'polite'"
        validation-aria-live="polite"
      ></ic-text-field>
      <br />
      <ic-button id="toggle-btn-2">Toggle errors</ic-button>
      <script>
        let showErrors2 = false;
        const btn2 = document.getElementById("toggle-btn-2");
        const field3 = document.getElementById("field-3");
        const field4 = document.getElementById("field-4");

        btn2.addEventListener("click", () => {
          showErrors2 = !showErrors2;

          field3.setAttribute("validation-status", showErrors2 ? "error" : "");
          field3.setAttribute(
            "validation-text",
            showErrors2 ? "Third error message" : ""
          );

          field4.setAttribute("validation-status", showErrors2 ? "error" : "");
          field4.setAttribute(
            "validation-text",
            showErrors2 ? "Fourth error message" : ""
          );
        });
      <\/script>`])),name:`Aria-live behaviour`},E={render:()=>r`<ic-text-field
      rows="6"
      value="Arabica"
      max-characters="25"
      resize
      label="What is your favourite coffee?"
      size="small"
      required="true"
      placeholder="Placeholder"
      helper-text="Such as Arabica, Robusta or Liberica"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </svg>
    </ic-text-field> `,name:`Text area with resize`},D={render:()=>r(c||=a([`
    <form>
      <ic-text-field label="What is your favourite coffee?"></ic-text-field>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      document.querySelector("form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log(
          document.querySelector('input[name="ic-text-field-input-0"]').value
        );
      });
    <\/script>
  `])),name:`Form`},O={render:()=>r`<ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
      >
      </ic-text-field>
      <ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="With custom validation messages."
        type="number"
        min-message="You must order at least 1 coffee"
        max-message="You cannot order more than 4 coffees"
        min="1"
        max="4"
      >
      </ic-text-field>`,name:`Min and max`},k={render:()=>r(l||=a([`<script>
        function handleIcChange(ev) {
          console.log(ev.detail.value, "icChange");
        }
        document
          .querySelector("ic-text-field")
          .addEventListener("icChange", handleIcChange);
      <\/script>
      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`])),name:`Logging icChange`},A={render:()=>r(u||=a([`<script>
        function handleIcChange(ev) {
          console.log(ev.detail.value, "icChange");
        }
        document
          .querySelector("ic-text-field")
          .addEventListener(
            "icKeydown",
            ({ detail: { event, cursorPosition, selectionEnd } }) => {
              console.log(
                \`Key: \${event.code}, Cursor position: \${cursorPosition}, Selection end: \${selectionEnd}\`
              );
            }
          );
      <\/script>
      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`],[`<script>
        function handleIcChange(ev) {
          console.log(ev.detail.value, "icChange");
        }
        document
          .querySelector("ic-text-field")
          .addEventListener(
            "icKeydown",
            ({ detail: { event, cursorPosition, selectionEnd } }) => {
              console.log(
                \\\`Key: \\\${event.code}, Cursor position: \\\${cursorPosition}, Selection end: \\\${selectionEnd}\\\`
              );
            }
          );
      <\/script>
      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>`])),name:`Logging icKeydown`},j={render:()=>r`<ic-text-field
        max-characters="2"
        label="What is your favourite coffee?"
        helper-text="Short answers only."
      >
      </ic-text-field>
      <ic-text-field
        max-characters="2"
        label="What is your favourite coffee?"
        helper-text="Short answers only. The character count is hidden."
        hide-char-count
      >
      </ic-text-field>
      <ic-text-field
        min-characters="3"
        label="What is your favourite coffee?"
        helper-text="Long answer please."
      >
      </ic-text-field>
      <br />
      <ic-text-field
        min-characters="2"
        max-characters="5"
        min-characters-message="Too short - please type at least 2 characters"
        max-characters-message="5 characters is long enough"
        label="What is your favourite coffee?"
        helper-text="Long answer please. (With custom validation messages)"
      ></ic-text-field>`,name:`Maximum and minimum characters`},M={render:()=>r`<span lang="fr">
      <ic-text-field
        label="Boisson préférée"
        placeholder="Boisson"
        helper-text="This textfield will read in french to assistive technologies"
      >
      </ic-text-field>
    </span>`,name:`Internationalisation`},N=`inline-radio`,P={render:e=>r(d||=a([`<div
        style="background-color: `,`;
          "
      >
        <ic-text-field
          debounce=`,`
          disabled=`,`
          full-width=`,`
          helper-text=`,`
          hide-char-count=`,`
          hide-label=`,`
          input-id=`,`
          inputmode=`,`
          label=`,`
          max=`,`
          max-characters=`,`
          max-characters-message=`,`
          max-message=`,`
          min=`,`
          min-characters=`,`
          min-characters-message=`,`
          min-message=`,`
          name=`,`
          placeholder=`,`
          readonly=`,`
          required=`,`
          resize=`,`
          rows=`,`
          size=`,`
          spellcheck=`,`
          theme=`,`
          type=`,`
          validation-aria-live=`,`
          validation-inline=`,`
          validation-status=`,`
          validation-text=`,`
          value=`,`
        >
          `,`
        </ic-text-field>
      </div>
      <script>
        document
          .querySelector("ic-text-field")
          .addEventListener("icChange", (ev) => console.log(ev.detail.value));
      <\/script>`]),e.theme===`light`?`white`:e.theme===`dark`?`var(--ic-color-background-primary-dark)`:`transparent`,e.debounce,e.disabled,e.fullWidth,e.helperText,e.hideCharCount,e.hideLabel,e.inputId,e.inputmode,e.label,e.max,e.maxCharacters,e.maxCharactersMessage,e.maxMessage,e.min,e.minCharacters,e.minCharactersMessage,e.minMessage,e.name,e.placeholder,e.readonly,e.required,e.resize,e.rows,e.size,e.spellcheck,e.theme,e.type,e.validationAriaLive,e.validationInline,e.validationStatus===`no status`?``:e.validationStatus,e.validationText,e.value,e.showIconSlot&&r`<svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>`),args:p,argTypes:{inputmode:{options:[`none`,`text`,`tel`,`url`,`email`,`numeric`,`decimal`,`search`],control:{type:`select`}},size:{options:[`medium`,`small`],control:{type:N}},type:{options:[`email`,`password`,`tel`,`text`,`url`,`number`,`search`],control:{type:`select`}},validationAriaLive:{options:[`default`,`polite`,`assertive`,`off`],control:{type:N}},validationStatus:{options:[`no status`,`warning`,`error`,`success`],control:{type:`select`}},showIconSlot:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:N}}},name:`Playground`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field label="What is your favourite coffee?"> </ic-text-field>
      <ic-text-field rows="6" label="What is your favourite coffee?">
      </ic-text-field>\`,
  name: "Default"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field autofocus label="What is your favourite coffee?">
    </ic-text-field>\`,
  name: "Autofocus"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      >
      </ic-text-field>
      <ic-text-field
        rows="6"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      >
      </ic-text-field> \`,
  name: "Placeholder and required"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field>
      <ic-text-field
        rows="6"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field>
      <ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
      >
        <ic-typography variant="caption" slot="helper-text">
          <span>
            Slotted helper text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-text-field>\`,
  name: "Helper text"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> \`,
  name: "With icon"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> \`,
  name: "With value"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<style>
        ic-text-field {
          --input-width: 400px;
        }
      </style>
      <ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        resize
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> \`,
  name: "Custom width"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display: flex">
        <ic-text-field
          full-width="true"
          value="Arabica"
          max-characters="25"
          label="What is your favourite coffee?"
          size="small"
          required="true"
          placeholder="Placeholder"
          helper-text="Such as Arabica, Robusta or Liberica"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>
        </ic-text-field>
      </div>
      <ic-text-field
        full-width="true"
        rows="6"
        value="Arabica"
        max-characters="25"
        resize
        label="What is your favourite coffee?"
        size="small"
        required="true"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> \`,
  name: "Full width"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        value="Arabica"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        value="Arabica"
        rows="6"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        disabled
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field> \`,
  name: "Disabled"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field>
      <ic-text-field
        rows="6"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        readonly
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
      </ic-text-field> \`,
  name: "Read only"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        validation-status="success"
        validation-text="Good choice!"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="success"
        validation-text="Good choice!"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta, Liberica or something else to make this label long"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="success"
        validation-text="Good choice!"
        validation-inline="true"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="success"
        validation-text="Good choice!"
        validation-inline="true"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        size="small"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="warning"
        validation-text="A very long warning message to test if wrapping works"
        value="Arabica"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="warning"
        validation-text="A very long warning message to test if wrapping works"
        value="Arabica"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea with milk and 2 sugars"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        rows="6"
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="Tea with milk and 2 sugars"
        max-characters="25"
        label="What is your favourite coffee?"
        required
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="6"
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
        required
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="now it has really gone to (coffee) pot"
        value="0"
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
        required
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </ic-text-field>
      <ic-text-field
        validation-status="error"
        validation-text="I'm not familiar with this type of coffee"
        validation-inline-internal="true"
        value="Milkshake"
        label="What is your favourite coffee?"
        required
        hide-label
        size="small"
        placeholder="Placeholder"
        helper-text="Such as Arabica, Robusta or Liberica"
      ></ic-text-field>
      <ic-text-field
        label="What is your favourite slotted coffee?"
        validation-status="error"
        placeholder="Placeholder"
      >
        <ic-typography variant="caption" slot="validation-text">
          <span>
            Slotted validation text with a <ic-link href="#">link</ic-link>
          </span>
        </ic-typography>
      </ic-text-field>\`,
  name: "Validation"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        id="field-1"
        label="What is your favourite coffee?"
        helper-text="Error already set on page load"
        validation-status="error"
        validation-text="First error message"
      ></ic-text-field>
      <br />
      <ic-text-field
        id="field-2"
        label="What is your favourite coffee?"
        helper-text="Error set after page load"
      ></ic-text-field>
      <br />
      <ic-button id="toggle-btn-1">Toggle errors</ic-button>
      <script>
        let showErrors1 = false;
        const btn1 = document.getElementById("toggle-btn-1");
        const field1 = document.getElementById("field-1");
        const field2 = document.getElementById("field-2");

        btn1.addEventListener("click", () => {
          showErrors1 = !showErrors1;

          field1.setAttribute("validation-status", showErrors1 ? "" : "error");
          field1.setAttribute(
            "validation-text",
            showErrors1 ? "" : "First error message"
          );

          field2.setAttribute("validation-status", showErrors1 ? "error" : "");
          field2.setAttribute(
            "validation-text",
            showErrors1 ? "Second error message" : ""
          );
        });
      <\/script>
      <br />
      <br />
      <br />
      <br />
      <ic-text-field
        id="field-3"
        label="What is your favourite coffee?"
        helper-text="aria-live overridden as 'polite'"
        validation-aria-live="polite"
      ></ic-text-field>
      <br />
      <ic-text-field
        id="field-4"
        label="What is your favourite coffee?"
        helper-text="aria-live overridden as 'polite'"
        validation-aria-live="polite"
      ></ic-text-field>
      <br />
      <ic-button id="toggle-btn-2">Toggle errors</ic-button>
      <script>
        let showErrors2 = false;
        const btn2 = document.getElementById("toggle-btn-2");
        const field3 = document.getElementById("field-3");
        const field4 = document.getElementById("field-4");

        btn2.addEventListener("click", () => {
          showErrors2 = !showErrors2;

          field3.setAttribute("validation-status", showErrors2 ? "error" : "");
          field3.setAttribute(
            "validation-text",
            showErrors2 ? "Third error message" : ""
          );

          field4.setAttribute("validation-status", showErrors2 ? "error" : "");
          field4.setAttribute(
            "validation-text",
            showErrors2 ? "Fourth error message" : ""
          );
        });
      <\/script>\`,
  name: "Aria-live behaviour"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
      rows="6"
      value="Arabica"
      max-characters="25"
      resize
      label="What is your favourite coffee?"
      size="small"
      required="true"
      placeholder="Placeholder"
      helper-text="Such as Arabica, Robusta or Liberica"
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </svg>
    </ic-text-field> \`,
  name: "Text area with resize"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form>
      <ic-text-field label="What is your favourite coffee?"></ic-text-field>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      document.querySelector("form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log(
          document.querySelector('input[name="ic-text-field-input-0"]').value
        );
      });
    <\/script>
  \`,
  name: "Form"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="Our coffee machines have a maximum capacity of 4 coffees at a time."
        type="number"
        min="1"
        max="4"
      >
      </ic-text-field>
      <ic-text-field
        inputmode="numeric"
        label="How many coffees do you want?"
        helper-text="With custom validation messages."
        type="number"
        min-message="You must order at least 1 coffee"
        max-message="You cannot order more than 4 coffees"
        min="1"
        max="4"
      >
      </ic-text-field>\`,
  name: "Min and max"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`<script>
        function handleIcChange(ev) {
          console.log(ev.detail.value, "icChange");
        }
        document
          .querySelector("ic-text-field")
          .addEventListener("icChange", handleIcChange);
      <\/script>
      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>\`,
  name: "Logging icChange"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`<script>
        function handleIcChange(ev) {
          console.log(ev.detail.value, "icChange");
        }
        document
          .querySelector("ic-text-field")
          .addEventListener(
            "icKeydown",
            ({ detail: { event, cursorPosition, selectionEnd } }) => {
              console.log(
                \\\`Key: \\\${event.code}, Cursor position: \\\${cursorPosition}, Selection end: \\\${selectionEnd}\\\`
              );
            }
          );
      <\/script>
      <ic-text-field label="What is your favourite coffee?"> </ic-text-field>\`,
  name: "Logging icKeydown"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-text-field
        max-characters="2"
        label="What is your favourite coffee?"
        helper-text="Short answers only."
      >
      </ic-text-field>
      <ic-text-field
        max-characters="2"
        label="What is your favourite coffee?"
        helper-text="Short answers only. The character count is hidden."
        hide-char-count
      >
      </ic-text-field>
      <ic-text-field
        min-characters="3"
        label="What is your favourite coffee?"
        helper-text="Long answer please."
      >
      </ic-text-field>
      <br />
      <ic-text-field
        min-characters="2"
        max-characters="5"
        min-characters-message="Too short - please type at least 2 characters"
        max-characters-message="5 characters is long enough"
        label="What is your favourite coffee?"
        helper-text="Long answer please. (With custom validation messages)"
      ></ic-text-field>\`,
  name: "Maximum and minimum characters"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\`<span lang="fr">
      <ic-text-field
        label="Boisson préférée"
        placeholder="Boisson"
        helper-text="This textfield will read in french to assistive technologies"
      >
      </ic-text-field>
    </span>\`,
  name: "Internationalisation"
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => html\`<div
        style="background-color: \${args.theme === "light" ? "white" : args.theme === "dark" ? "var(--ic-color-background-primary-dark)" : "transparent"};
          "
      >
        <ic-text-field
          debounce=\${args.debounce}
          disabled=\${args.disabled}
          full-width=\${args.fullWidth}
          helper-text=\${args.helperText}
          hide-char-count=\${args.hideCharCount}
          hide-label=\${args.hideLabel}
          input-id=\${args.inputId}
          inputmode=\${args.inputmode}
          label=\${args.label}
          max=\${args.max}
          max-characters=\${args.maxCharacters}
          max-characters-message=\${args.maxCharactersMessage}
          max-message=\${args.maxMessage}
          min=\${args.min}
          min-characters=\${args.minCharacters}
          min-characters-message=\${args.minCharactersMessage}
          min-message=\${args.minMessage}
          name=\${args.name}
          placeholder=\${args.placeholder}
          readonly=\${args.readonly}
          required=\${args.required}
          resize=\${args.resize}
          rows=\${args.rows}
          size=\${args.size}
          spellcheck=\${args.spellcheck}
          theme=\${args.theme}
          type=\${args.type}
          validation-aria-live=\${args.validationAriaLive}
          validation-inline=\${args.validationInline}
          validation-status=\${args.validationStatus === "no status" ? "" : args.validationStatus}
          validation-text=\${args.validationText}
          value=\${args.value}
        >
          \${args.showIconSlot && html\`<svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            />
          </svg>\`}
        </ic-text-field>
      </div>
      <script>
        document
          .querySelector("ic-text-field")
          .addEventListener("icChange", (ev) => console.log(ev.detail.value));
      <\/script>\`,
  args: defaultArgs,
  argTypes: {
    inputmode: {
      options: ["none", "text", "tel", "url", "email", "numeric", "decimal", "search"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["medium", "small"],
      control: {
        type: inlineRadioSelector
      }
    },
    type: {
      options: ["email", "password", "tel", "text", "url", "number", "search"],
      control: {
        type: "select"
      }
    },
    validationAriaLive: {
      options: ["default", "polite", "assertive", "off"],
      control: {
        type: inlineRadioSelector
      }
    },
    validationStatus: {
      options: ["no status", "warning", "error", "success"],
      control: {
        type: "select"
      }
    },
    showIconSlot: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    }
  },
  name: "Playground"
}`,...P.parameters?.docs?.source}}},F=[`Default`,`Autofocus`,`PlaceholderAndRequired`,`HelperText`,`WithIcon`,`WithValue`,`CustomWidth`,`FullWidth`,`Disabled`,`ReadOnly`,`Validation`,`AriaLiveBehaviour`,`TextAreaWithResize`,`Form`,`MinAndMax`,`LoggingIcChange`,`LoggingIcKeydown`,`MaximumAndMinimumCharacters`,`Internationalisation`,`Playground`]}));I();export{T as AriaLiveBehaviour,h as Autofocus,b as CustomWidth,m as Default,S as Disabled,D as Form,x as FullWidth,_ as HelperText,M as Internationalisation,k as LoggingIcChange,A as LoggingIcKeydown,j as MaximumAndMinimumCharacters,O as MinAndMax,g as PlaceholderAndRequired,P as Playground,C as ReadOnly,E as TextAreaWithResize,w as Validation,v as WithIcon,y as WithValue,F as __namedExportsOrder,f as default,I as n,o as t};