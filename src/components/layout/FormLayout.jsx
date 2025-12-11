import { Form } from "../common/Form";
import { FormHeader } from "../common/Form";
import { FormContainer } from "../common/Form";
import { SubmitForm } from "../common/Form";
import { Input } from "../common/Input";
import { FormDescription } from "../common/Form";
function FormLayout() {
    Form.FormHeader = FormHeader;
    Form.FormContainer = FormContainer;
    Form.SubmitForm = SubmitForm;
    Form.FormDescription = FormDescription;

    return (

        <div>
            <Form >
                <Form.FormHeader>
                    Registration Form
                </Form.FormHeader>
                <Form.FormDescription>Fill in your information below</Form.FormDescription>
                <Form.FormContainer><h2>Personal Details</h2><Input /><Form.SubmitForm>Submit</Form.SubmitForm></Form.FormContainer>

            </Form>
        </div>
    )

}

export default FormLayout;
