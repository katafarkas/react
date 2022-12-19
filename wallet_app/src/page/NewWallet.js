import { Button, Container, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { doApiCall, AXIOS_METHOD } from "../hooks/useApi"

function NewWallet() {
  const navigate = useNavigate();

  function titleValidate(value) {
    if (value.length === 0) {
      return "A wallet neve kötelező";
    }
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
              name: "",
              balance: "",
            }}
            onSubmit={(value, { setFieldError, setSubmitting }) => {
              setSubmitting(true);
              const onFailure = (apiError) => {
                setFieldError('text', apiError);
                setSubmitting(false);
              };

              doApiCall(AXIOS_METHOD.PUT, '/wallet', (data) => {
                const currentId = data.id
                let requestData = {
                  wallet_id: currentId,
                  title: "Inicializálási tranzakció",
                  amount: value.balance
                }
                doApiCall(AXIOS_METHOD.PUT, '/transactions', (data) => {
                  navigate('/wallets');
                }, onFailure, requestData);
              }, onFailure, value);
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
                    name="name"
                    type="text"
                    label={"Név"}
                    validate={titleValidate}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="balance"
                    type="number"
                    label={"Kezdő összeg"}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Button
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
    </Container >
  );
}

export default NewWallet;
