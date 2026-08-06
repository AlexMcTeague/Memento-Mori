import { useForm } from 'react-hook-form';
import '../css/form.css';

// Define the form fields and their types (for Typescript)
type FormFields = {
    Title: string;
    Category: string;
    Description: string;
    DueDate: Date;
    Doom: string;
}

type TaskFormProps = {
    isVisible: boolean;
    closeForm: () => void;
}

function TaskForm({ isVisible, closeForm }: TaskFormProps) {

    // React Hook Form setup
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<FormFields>({
        defaultValues: {
            Category: "",
            Doom: "1"
        }
    });

    // Backend URL setup
    const backendPort = import.meta.env.BACKEND_PORT || 8080;
    const backendUrl = `http://localhost:${backendPort}/api/tasks`;

    // Handle form submission
    const onSubmit = async (data: FormFields) => {
        try {
            const payload = {
                ...data,
                Doom: Number(data.Doom),
            };

            const response = await fetch(backendUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Form submitted successfully:", result);

            // Reset the form
            reset();
            closeForm(); // Calls the parent's closeForm since the method was passed as an arg
        } catch (error) {
            setError("root", { type: "manual", message: "Error submitting form" });
        }
    }

    // If the form is not visible, return null to hide it
    if (!isVisible) {
        return null;
    }

    // Render the form
    return (
        <div className="form-overlay">
            <div className="form-popup" role="dialog" aria-modal="true">
                <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>New Task</h1>
                    <div className="form-row">
                        <label htmlFor="title-field">Title</label>
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

                    <div className="form-row">
                        <label htmlFor="category-field">Category</label>
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

                    <div className="form-row">
                        <label htmlFor="description-field">Description</label>
                        <textarea {...register("Description")} id="description-field" placeholder="Description" />
                        {errors.Description && <span className="error-msg">{errors.Description.message}</span>}
                    </div>

                    <div className="form-row">
                        <label htmlFor="due-date-field">Due Date</label>
                        <input {...register("DueDate")} id="due-date-field" type="datetime-local" />
                        {errors.DueDate && <span className="error-msg">{errors.DueDate.message}</span>}
                    </div>

                    <div id="doom-form-row" className="form-row">
                        <label htmlFor="doom-field">Doom</label>
                        <div id="doom-field">
                            <label htmlFor="doom-1">1</label>
                            <input {...register("Doom", { required: "Doom is Required" })} id="doom-1" type="radio" value="1" />
                            <label htmlFor="doom-2">2</label>
                            <input {...register("Doom", { required: "Doom is Required" })} id="doom-2" type="radio" value="2" />
                            <label htmlFor="doom-3">3</label>
                            <input {...register("Doom", { required: "Doom is Required" })} id="doom-3" type="radio" value="3" />
                            <label htmlFor="doom-4">4</label>
                            <input {...register("Doom", { required: "Doom is Required" })} id="doom-4" type="radio" value="4" />
                            <label htmlFor="doom-5">5</label>
                            <input {...register("Doom", { required: "Doom is Required" })} id="doom-5" type="radio" value="5" />
                        </div>
                        {errors.Doom && <span className="error-msg">{errors.Doom.message}</span>}
                    </div>

                    <div className="form-buttons">
                        {errors.root && <span className="error-msg">{errors.root.message}</span>}
                        <button type="button" onClick={() => { reset(); closeForm(); }}>Cancel</button>
                        <button disabled={isSubmitting} type="submit">
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;