import React from "react";
import Title from "../../title/title";
import styles from './form.module.scss';
import { Button } from "react-bootstrap";
import { Form as form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Form(){
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/demo/selection');
    };

    return (
        <>
            <Title title="Nutritional Form"/>
            <section className={styles.form__container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                <div className= {` ${styles.row} mb-4 w-100 form-row`}>
                    <div class="w-50">
                        <h5 class="name__label ">Sex</h5>
                    </div>
                    <form.Select class="w-50" placeholder="CIao">
                    <option disabled selected>Select your gender</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                    </form.Select>
                </div>
                <div className= {` ${styles.row} mb-4 w-100 form-row`}>
                    <div class="w-50">
                        <h5 class="name__label ">Age</h5>
                    </div>
                    <form.Control type="number" placeholder="Enter your age" />
                </div>
                <div className= {` ${styles.row} mb-4 w-100 form-row`}>
                    <div class="w-50">
                        <h5 class="name__label ">Height (cm)</h5>
                    </div>
                    <form.Control type="number" placeholder="Enter your Height" />
                </div>
                <div className= {` ${styles.row} mb-4 w-100 form-row`}>
                    <div class="w-50">
                        <h5 class="name__label ">Weight (kg)</h5>
                    </div>
                    <form.Control type="number" placeholder="Enter your Weight" />
                </div>
                <div className= {` ${styles.row} mb-4 w-100 form-row`}>
                    <div class="w-50">
                        <h5 class="name__label">Dietary Restriction</h5>
                    </div>
                    
                    <form.Select class="w-50" placeholder="CIao">
                    <option disabled selected>Select your Dietary Restriction</option>

                    <option value="lactose_intolerance" title="Avoiding dairy products containing lactose.">Lactose Intolerance</option>
                    <option value="gluten_intolerance" title="Avoiding gluten-containing foods like wheat, barley, and rye.">Gluten Intolerance/Celiac Disease</option>
                    <option value="nut_allergies" title="Avoiding peanuts, tree nuts, and their derivatives.">Nut Allergies</option>
                    <option value="shellfish_allergies" title="Avoiding shellfish like shrimp, crab, and lobster.">Shellfish Allergies</option>
                    <option value="egg_allergies" title="Avoiding eggs and egg-containing products.">Egg Allergies</option>
                    <option value="soy_allergies" title="Avoiding soy and soy-based products.">Soy Allergies</option>
                    <option value="vegetarianism" title="Avoiding meat and fish; consuming plant-based foods.">Vegetarianism</option>
                    <option value="veganism" title="Avoiding all animal-derived products, including meat, fish, dairy, eggs, and honey.">Veganism</option>
                    <option value="pescatarianism" title="Avoiding meat but consuming fish and other seafood.">Pescatarianism</option>
                    <option value="halal" title="Following Islamic dietary guidelines, avoiding pork and alcohol, and consuming only halal-certified products.">Halal</option>
                    <option value="kosher" title="Following Jewish dietary laws, avoiding certain animal products, and not mixing meat and dairy.">Kosher</option>
                    <option value="low_FODMAP" title="Avoiding certain carbohydrates that can cause digestive issues in people with irritable bowel syndrome (IBS).">Low FODMAP Diet</option>
                    <option value="low_sodium" title="Reducing salt intake, often for people with high blood pressure or heart conditions.">Low-sodium Diet</option>
                    <option value="diabetic_diet" title="Managing carbohydrate intake to help control blood sugar levels.">Diabetic Diet</option>
                    <option value="low_purine" title="Avoiding high-purine foods (like red meat, seafood, and alcohol) to reduce the risk of gout flare-ups.">Low-purine Diet</option>
                    <option value="none">None</option>
                    </form.Select>
                </div>
                <div className= {` ${styles.row} mb-5 w-100 form-row`}>
                    <div class="w-50">
                        <h5 class="name__label ">LifeStyle</h5>
                    </div>
                    <form.Select class="w-100" placeholder="CIao">
                    <option disabled selected>Select your Lifestyle</option>
                    <option value="sedentary_lifestyle" title="Little to no physical activity, often involving activities such as sitting, watching television, or working on a computer.">Sedentary Lifestyle</option>
                    <option value="lightly_active_lifestyle" title="Involves some physical activity, such as walking or light exercise, but not enough to be considered moderately active.">Lightly Active Lifestyle</option>
                    <option value="moderately_active_lifestyle" title="Includes regular physical activity, such as engaging in moderate-intensity exercise for at least 150 minutes per week or vigorous-intensity exercise for at least 75 minutes per week.">Moderately Active Lifestyle</option>
                    <option value="very_active_lifestyle" title="Involves a high level of physical activity, typically engaging in vigorous-intensity exercise for more than 75 minutes per week or participating in competitive sports or physically demanding jobs.">Very Active Lifestyle</option>
                    <option value="mixed_lifestyle" title="A combination of various activity levels, with periods of sedentary, lightly active, moderately active, and very active behaviors.">Mixed Lifestyle</option>
                    </form.Select>
                </div>
                    <Button type="submit" variant="primary">Submit</Button>
                </form>

            </section>
        </>
    );
}

export default Form;