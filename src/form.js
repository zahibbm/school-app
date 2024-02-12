import React, {useState } from 'react';

const questions=["Full Name","Name with initial","Contact Number","email address","Parent Name (Father or Mother)","Prents Contact Number"];

const QuestionForm = () => {
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  
    const handleInputChange = (event) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = event.target.value;
      setAnswers(newAnswers);
    };
  
    const handleNext = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    }
    return (
        <>
        <div className="container position-absolute top-50 start-50 translate-middle">
            <div className='mb-3'>
                <div className="form-floating">
                    <input type="text" className="form-control" id={currentQuestionIndex} value={answers[currentQuestionIndex]} onChange={handleInputChange}/>
                    <label htmlFor={currentQuestionIndex}>{questions[currentQuestionIndex]}</label>
                </div>   
            </div>
                      
        </div>
        <div className='container d-grid gap-2 position-absolute bottom-0 start-50 translate-middle-x'>
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className='btn btn-primary'>Previous</button>
            <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1} className='btn btn-primary'>Next</button>
        </div>
        </>
        // <div className='centered-container'>
        //     <h2>{questions[currentQuestionIndex]}</h2>
        //     <input
        //         type="text"
        //         onChange={handleInputChange}
        //     />
        //     <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
        //     <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
        // </div>
    );
};

export default QuestionForm;

// const MyComponent = () => {
//     return (
        // <div className="container position-relative top-50">
        //     <div className='input-group'>
        //         <div className="form-floating mb-3">
        //             <input type="text" className="form-control" id="fname"/>
        //             <label htmlFor="fname">Full Name</label>
        //         </div>
        //     </div>
        //     <div className='d-grid'>
        //         <button className='btn btn-primary mb-3 '>Next</button>
        //     </div>
            
        // </div>
        
//     );
// };

// export default MyComponent;