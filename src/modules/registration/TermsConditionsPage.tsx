import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { StyledTypography, StyledButton } from "components/reusable";

export const TermsConditionsPage = () => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={1400} height="100vh" textAlign="center" paddingTop={20}>
      <StyledTypography pb={3} variant="h3">
        Terms and Conditions
      </StyledTypography>
      <StyledTypography paddingBottom={3}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
        voluptas laudantium ex nam veritatis cupiditate saepe quia recusandae
        dolorum laborum dignissimos fuga perferendis aut soluta maiores cum
        quasi dolor, mollitia ea praesentium labore delectus iste sunt! Quasi
        repudiandae libero optio vel aliquam voluptates beatae molestiae
        incidunt aliquid sequi! Dicta accusantium veniam sapiente sit officiis
        maiores qui explicabo incidunt ipsum totam error corrupti officia,
        deleniti, aperiam facere fugiat delectus odit veritatis esse similique
        omnis. Sequi sint, sed mollitia fuga ab quo, repellendus esse natus aut
        doloribus veniam, magni corporis eum vero. In fuga eos id corrupti
        minima minus cum! Amet soluta exercitationem, molestiae dolore sunt
        repudiandae nostrum quia tenetur porro. Tenetur inventore suscipit qui
        omnis voluptatem, ab corrupti nisi autem cumque dicta optio explicabo
        reprehenderit aspernatur dolor, ratione accusamus facilis, voluptatibus
        eum molestias impedit voluptas incidunt neque? Eius similique ab fugiat
        adipisci beatae aut asperiores officiis quia in dolorem harum eaque vel
        quidem, sapiente hic aliquam, optio, porro facilis recusandae minima?
        Eaque, incidunt id quis dolor, veritatis quod enim temporibus at
        voluptas dolorum nam. Corporis nostrum, rerum laudantium consequatur
        omnis sed eligendi eos nemo facilis magnam! Incidunt error iusto
        laboriosam eos officia quod, eum illum molestiae totam reprehenderit
        minus, quasi blanditiis.
      </StyledTypography>
      <Box width={200} margin="0 auto">
        <StyledButton
          color="secondary"
          text="I agree"
          onClick={() => navigate("/register")}
        />
      </Box>
    </Box>
  );
};
