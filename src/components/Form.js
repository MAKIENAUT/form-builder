import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import FormSuggestionButton from "./FormSuggestionButton"

export default function Form() {
   return (
      <section className="form-parent">
         <h1 className="form-header">Forms</h1>
         <div className="form-container">
            <div className="form-wrapper">
               <div className="main-form">
                  <textarea className="main-form-input" type="text" placeholder="What form do you need?"></textarea>
                  <button className="main-form-button">
                     <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
               </div>
               <div className="form-suggestions">
                  <FormSuggestionButton
                     b="Placeholder Title"
                     t="Placeholder Subtitle"
                  />
                  <FormSuggestionButton
                     b="Placeholder Title 2"
                     t="Placeholder Subtitle 2"
                  />
                  <FormSuggestionButton
                     b="Placeholder Title 3"
                     t="Placeholder Subtitle 3"
                  />
                  <FormSuggestionButton
                     b="Placeholder Title 4"
                     t="Placeholder Subtitle 4"
                  />
               </div>
               <button className="blank-form-button">Or create a blank form</button>
            </div>
         </div>
      </section>
   )
}