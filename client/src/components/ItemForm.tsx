import { useForm } from 'react-hook-form';
import '../css/form.css';
import { useState } from 'react';

// Define the form fields and their types (for Typescript)
type FormFields = {
    Title: string;
    Category: string;
    Description: string;
    DueDate: Date;
    Difficulty: number;
}

function ItemForm() {
    const [isVisible, setIsVisible] = useState(false); // TODO: Enable form when New Item button is clicked. Hide when Cancel is clicked. Restrict New Item button when form is visible

    // React Hook Form setup
    const {
        register, 
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting } 
    } = useForm<FormFields>({
        defaultValues: {
            Category: ""
        }
    });

    // Backend URL setup
    const backendPort = import.meta.env.BACKEND_PORT || 8080;
    const backendUrl = `http://localhost:${backendPort}/api/items`;
    
    // Handle form submission
    const onSubmit = async (data: FormFields) => {
        try {
            const response = await fetch(backendUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Form submitted successfully:", result);

            // Reset the form
            setIsVisible(false);
            reset();
        } catch (error) {
            setError("root", { type: "manual", message: "Error submitting form"});
        }
    }

    // If the form is not visible, return null to hide it
    if (!isVisible) {
        return null;
    }
  
    // Render the form
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title-field">Title: </label>
                <input
                    id="title-field"
                    {...register("Title", {
                        required: "Title is required", 
                        maxLength: { value: 50, message: "Maximum 50 characters allowed" },
                        /* Example of custom validation
                        validate: (value) => {
                            if (!value.includes("@")) {
                                return "Email must contain an '@' symbol";
                            }
                            return true;
                        }
                        */
                    })}
                    type="text"
                    placeholder="Title"
                />
                {errors.Title && <span className="error-msg">{errors.Title.message}</span>}
            </div>

            <div>
                <label htmlFor="category-field">Category: </label>
                <select {...register("Category")} id="category-field">
                    <option value="">-- Select a Category --</option>
                    <option value="Health">Health</option>
                    <option value="Home">Home</option>
                    <option value="Job">Job</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Fun">Fun</option>
                </select>
                {errors.Category && <span className="error-msg">{errors.Category.message}</span>}
            </div>

            <div>
                <label htmlFor="description-field">Description: </label>
                <textarea {...register("Description")} id="description-field" placeholder="Description" />
                {errors.Description && <span className="error-msg">{errors.Description.message}</span>}
            </div>

            <div>
                <label htmlFor="due-date-field">Due Date: </label>
                <input {...register("DueDate")} id="due-date-field" type="datetime-local" />
                {errors.DueDate && <span className="error-msg">{errors.DueDate.message}</span>}
            </div>

            <div>
                { /* TODO: Allow user to "unselect" a radio button */ }
                <label htmlFor="difficulty-field">Difficulty: </label> {/* TODO: Figure out labeling for radio buttons*/}
                <input {...register("Difficulty")} type="radio" value="1" />
                <input {...register("Difficulty")} type="radio" value="2" />
                <input {...register("Difficulty")} type="radio" value="3" />
                <input {...register("Difficulty")} type="radio" value="4" />
                <input {...register("Difficulty")} type="radio" value="5" />
                {errors.Difficulty && <span className="error-msg">{errors.Difficulty.message}</span>}
            </div>

            <button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            
            <div>
                {errors.root && <span className="error-msg">{errors.root.message}</span>}
            </div>
        </form>
    );
}

export default ItemForm;