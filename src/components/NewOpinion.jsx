import { useActionState } from "react"

function shareOpinionActionFn(prevFormData,formData){
  const userName = formData.get('userName')
  const title = formData.get('title')
  const body = formData.get('body')

  const errors=[]
  if(userName==''){
    errors.push("Username can't be empty")
  }
  if(title==''){
    errors.push("Title can't be empty")
  }
  if(body==''){
    errors.push("Body can't be empty")
  }
  if(errors.length>0){
    return({
      errors:errors,
      enteredData:{
        userName,
        title,
        body
      }
    })
  }
  return {errors:null}
}

export function NewOpinion() {

  const [formState,formAction] = useActionState(shareOpinionActionFn,{errors:null})

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName"
            defaultValue={formState.enteredData?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"
            defaultValue={formState.enteredData?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} 
          defaultValue={formState.enteredData?.body}
          ></textarea>
        </p>

        {formState.errors &&
        <ul className="errors">
          {formState.errors.map((error)=>(
            <li key={error}>{error}</li>
          ))}
        </ul>
        }

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
