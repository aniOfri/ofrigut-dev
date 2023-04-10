import '../../CSS/Dynrember/Back.css'

function Back(props: any) {
  return (
    <div id="goBack">
        <button className="backButton" onClick={() => props.setPage(0)}>
            חזור אחורה
        </button>
    </div>
  )
}

export default Back
