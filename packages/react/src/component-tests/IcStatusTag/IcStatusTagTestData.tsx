import React from "react";
import { IcStatusTag } from "../../components";

export const Neutral = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStatusTag label="Neutral" />
      <IcStatusTag label="Neutral" variant="outlined" />
    </div>
  );
};

export const Success = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStatusTag label="Success" status="success" announced={true} />
      <IcStatusTag label="Success" status="success" variant="outlined" />
    </div>
  );
};

export const Warning = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStatusTag label="Warning" status="warning" />
      <IcStatusTag label="Warning" status="warning" variant="outlined" />
    </div>
  );
};

export const Danger = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStatusTag label="Danger" status="danger" />
      <IcStatusTag label="Danger" status="danger" variant="outlined" />
    </div>
  );
};

export const AllStatuses = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStatusTag label="Neutral" status="neutral" />
      <IcStatusTag label="Neutral" status="neutral" variant="outlined" />
      <IcStatusTag label="Success" status="success" />
      <IcStatusTag label="Success" status="success" variant="outlined" />
      <IcStatusTag label="Warning" status="warning" />
      <IcStatusTag label="Warning" status="warning" variant="outlined" />
      <IcStatusTag label="Error" status="danger" />
      <IcStatusTag label="Error" status="danger" variant="outlined" />
    </div>
  );
};

export const AllStatusesSmall = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStatusTag label="Neutral" status="neutral" size="small" />
      <IcStatusTag
        label="Neutral"
        status="neutral"
        variant="outlined"
        size="small"
      />
      <IcStatusTag label="Success" status="success" size="small" />
      <IcStatusTag
        label="Success"
        status="success"
        variant="outlined"
        size="small"
      />
      <IcStatusTag label="Warning" status="warning" size="small" />
      <IcStatusTag
        label="Warning"
        status="warning"
        variant="outlined"
        size="small"
      />
      <IcStatusTag label="Error" status="danger" size="small" />
      <IcStatusTag
        label="Error"
        status="danger"
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export const AllStatusesLarge = () => {
  return (
    <div style={{ padding: "10px" }}>
      <IcStatusTag label="Neutral" status="neutral" size="large" />
      <IcStatusTag
        label="Neutral"
        status="neutral"
        variant="outlined"
        size="large"
      />
      <IcStatusTag label="Success" status="success" size="large" />
      <IcStatusTag
        label="Success"
        status="success"
        variant="outlined"
        size="large"
      />
      <IcStatusTag label="Warning" status="warning" size="large" />
      <IcStatusTag
        label="Warning"
        status="warning"
        variant="outlined"
        size="large"
      />
      <IcStatusTag label="Error" status="danger" size="large" />
      <IcStatusTag
        label="Error"
        status="danger"
        variant="outlined"
        size="large"
      />
    </div>
  );
};
