import { Button, Container, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate, useParams } from "react-router-dom";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";

function NewTransaction(refetch) {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Container sx={{ display: "flex", alignItems: "center", mt: 5 }}>
      <Grid container justifyContent={"center"} textAlign={"center"}>
        <Grid item xs={12}>
          <h2>Új tétel</h2>
        </Grid>
        <Grid item xs={12}>
          <Formik
            initialValues={{
              title: "",
              value: "",
              date: "",
            }}
            onSubmit={(value, { setFieldError, setSubmitting }) => {
              setSubmitting(true);
              let requestData = {
                wallet_id: id,
                title: value.title,
                amount: value.value
              }

              const onFailure = (apiError) => {
                setFieldError('title', apiError);
                setSubmitting(false);
              };

              doApiCall(AXIOS_METHOD.PUT, '/transactions', (data) => {
                navigate(`/wallets/wallet/${id}`);
              }, onFailure, requestData);
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
                    name="value"
                    type="number"
                    label={"Összeg"}
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
    </Container>
  );
}

export default NewTransaction;
