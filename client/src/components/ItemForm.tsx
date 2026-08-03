import { useForm } from 'react-hook-form';

function ItemForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Title", {required: true})} type="text" placeholder="Title" />
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