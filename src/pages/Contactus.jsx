import { Form } from "../components/common/Form";
import { FormHeader } from "../components/common/Form";
import { FormDescription } from "../components/common/Form";
import { FormContainer } from "../components/common/Form";
import { Input } from "../components/common/Input";
import { Select } from "../components/common/Select";
import { Checkbox } from "../components/common/CheckBox";
import { Textarea } from "../components/common/TextArea";
import { handleChange } from "../hooks/useHandleChange";
import { countryOptions } from "../constants/config";
import { Link } from "react-router-dom";
export function Contactus() {
    Form.FormHeader = FormHeader;
    Form.FormDescription = FormDescription;
    Form.FormContainer = FormContainer;

    return (
        <Link to="/Contactus"><Form>
            <Form.FormHeader>Contact Us</Form.FormHeader>
            <Form.FormDescription>Kindly Fill below Details</Form.FormDescription>
            <Form.FormContainer>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    label="Full Name"
                    placeholder="John Doe"
                    value=""
                    onChange={handleChange}
                    // error={errors.name}
                    required
                />
                <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="john@example.com"
                    //   value={formData.email}
                    onChange={handleChange}
                    //   error={errors.email}
                    required
                />
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    placeholder="+1 (555) 000-0000"
                    //value={formData.phone}
                    onChange={handleChange}
                // error={errors.phone}
                // required
                />
                <Select
                    id="country"
                    name="country"
                    label="Country"
                    options={countryOptions}
                    // value={formData.country}
                    onChange={handleChange}
                // error={errors.country}
                // required
                />
                <Input
                    id="subject"
                    name="subject"
                    type="text"
                    label="Subject"
                    placeholder="How can we help?"
                    // value={formData.subject}
                    onChange={handleChange}
                // error={errors.subject}
                // required
                />

                <Textarea
                    id="message"
                    name="message"
                    label="Message"
                    placeholder="Tell us more about your inquiry..."
                    rows="4"
                    // value={formData.message}
                    onChange={handleChange}
                // error={errors.message}
                // required
                />

                <Checkbox
                    id="newsletter"
                    name="newsletter"
                    label="Subscribe to our newsletter for updates"
                    // checked={formData.newsletter}
                    onChange={handleChange}
                />

                <Checkbox
                    id="terms"
                    name="terms"
                    label="I agree to the terms and conditions *"
                    // checked={formData.terms}
                    onChange={handleChange}

                // error={errors.terms}
                />

            </Form.FormContainer>
        </Form></Link>)

}