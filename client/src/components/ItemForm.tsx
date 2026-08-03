import { useForm } from 'react-hook-form';
import '../css/form.css';

type FormFields = {
    Title: string;
    Category: string;
    Description: string;
    DueDate: Date;
    Difficulty: number;
}

function ItemForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
    
    const onSubmit = (data: FormFields) => {
        console.log(data);
    }
  
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
                <label htmlFor="difficulty-field">Difficulty: </label> {/* TODO: Figure out labeling for radio buttons*/}
                <input {...register("Difficulty")} type="radio" value="1" />
                <input {...register("Difficulty")} type="radio" value="2" />
                <input {...register("Difficulty")} type="radio" value="3" />
                <input {...register("Difficulty")} type="radio" value="4" />
                <input {...register("Difficulty")} type="radio" value="5" />
                {errors.Difficulty && <span className="error-msg">{errors.Difficulty.message}</span>}
            </div>

            <input type="submit" />
        </form>
    );
}

export default ItemForm;