import { Button, Container, Grid, LinearProgress } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { doApiCall, AXIOS_METHOD } from "../hooks/useApi";

function EditTransaction() {
  const navigate = useNavigate();
  const { id, transactionId } = useParams()
  const [transaction, setTransaciton] = useState()

  useEffect(() => {
    getTransaction()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getTransaction() {
    doApiCall(AXIOS_METHOD.GET, `/transaction/${transactionId}`, (data) => {
      setTransaciton(data)
    })
  }

  function editTransaction() {

  }
  return (
    (!transaction ? <LinearProgress /> : (
      <Container sx={{ display: "flex", alignItems: "center", mt: 5 }}>
        <Grid container justifyContent={"center"} textAlign={"center"}>
          <Grid item xs={12}>
            <h2>Módosítás</h2>
          </Grid>
          <Grid item xs={12}>
            <Formik
              enableReinitialize
              initialValues={{
                title: transaction.title,
                amount: transaction.amount
              }}
              onSubmit={(value, { setFieldError, setSubmitting }) => {
                setSubmitting(true);
                const onFailure = (apiError) => {
                  setFieldError('text', apiError);
                  setSubmitting(false);
                };

                doApiCall(AXIOS_METHOD.PATCH, `/transaction/${transactionId}`, (data) => {
                  navigate(`/wallets/wallet/${id}`);
                }, onFailure, value)
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
                      name="amount"
                      type="number"
                      label={"Összeg"}
                      component={TextField}
                    ></Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={editTransaction}
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
      </Container>))
  );
}

export default EditTransaction;
