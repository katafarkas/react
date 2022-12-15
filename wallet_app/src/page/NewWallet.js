import { Button, Container, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

function NewWallet() {
  const navigate = useNavigate();

  function handleAddWallet() {
    navigate("/wallets");
  }

  return (
    <Container sx={{ display: "flex", alignItems: "center", mt: 5 }}>
      <Grid container justifyContent={"center"} textAlign={"center"}>
        <Grid item xs={12}>
          <h2>Új tárca</h2>
        </Grid>
        <Grid item xs={12}>
          <Formik
            initialValues={{
              title: "",
              initialValue: "",
            }}
          >
            <Form>
              <Grid
                container
                justifyContent={"center"}
                textAlign={"center"}
                spacing={3}
              >
                <Grid item xs={12}>
                  <Field
                    name="title"
                    type="text"
                    label={"Név"}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="initialValue"
                    type="number"
                    label={"Kezdő összeg"}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={handleAddWallet}
                    type="submit"
                    color="primary"
                    variant={"contained"}
                  >
                    <CheckIcon />
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NewWallet;
