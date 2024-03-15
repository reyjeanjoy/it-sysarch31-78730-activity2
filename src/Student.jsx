import picture from './assets/profilepic.jpg'
function Student(){

    return(
        <div className="student">
        <img className="student-image" src={picture} alt="picture"></img>
        <h2 className="student-title"> Rey Jean Joy Lumapac</h2>
        <p2 className="student-text"> reyjeanjoy23@gmail.com</p2>

    </div>
    );
}

export default Student
