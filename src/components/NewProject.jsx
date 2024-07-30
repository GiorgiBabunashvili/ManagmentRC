import Input from "./Input";

const NewProject = () => {
  return (
    <div>
      <menu>
        <li>
          <button>Cancle</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" isTextarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
