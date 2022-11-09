import React from "react";
import { Stack, Divider } from "@mui/material";
import { LeftHeader } from "./LeftHeader";
import { StartForm } from "./StartForm";
import { CompanyData } from "./CompanyData";
import { GenderRadio } from "./GenderRadio";

export const LeftMainAddItemPage = () => {
  return (
    <Stack spacing={1} width="50%" paddingRight={2}>
      <LeftHeader />
      <Divider />
      <StartForm />
      <CompanyData />
      <GenderRadio />
    </Stack>
  );
};
