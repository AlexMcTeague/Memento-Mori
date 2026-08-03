import { useForm } from 'react-hook-form';

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
      <input
        {...register("Title", {
            required: "Title is required", 
            maxLength: { value: 50, message: "Maximum 50 characters allowed" }
        })}
        type="text"
        placeholder="Title"
      />
      {errors.Title && <span className="error-msg">{errors.Title.message}</span>}

      <select {...register("Category")}>
        <option value="Health">Health</option>
        <option value="Home">Home</option>
        <option value="Job">Job</option>
        <option value="Groceries">Groceries</option>
        <option value="Fun">Fun</option>
      </select>
      
      <textarea {...register("Description")} />
     
      <input {...register("DueDate")} type="datetime-local" />

      <input {...register("Difficulty")} type="radio" value="1" />
      <input {...register("Difficulty")} type="radio" value="2" />
      <input {...register("Difficulty")} type="radio" value="3" />
      <input {...register("Difficulty")} type="radio" value="4" />
      <input {...register("Difficulty")} type="radio" value="5" />

      <input type="submit" />
    </form>
  );
}

export default ItemForm;