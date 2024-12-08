import './btns.css'

export default function BtnContainer({action1 ,action2, styleBtn1, iscondiOneNextBtn, styleforNext}){

    let isstyleforNext= styleforNext!=3;

    

    return(
        <div style={{display:styleBtn1}}>
            {
            isstyleforNext ? (
                <button onClick={action1} style={{display:iscondiOneNextBtn ? null :"none"}}>Next1</button>
            ):null
        }
            <button onClick={action2} style={{display:iscondiOneNextBtn ? "none" : null}} >Generate </button>

        </div>
    )
}