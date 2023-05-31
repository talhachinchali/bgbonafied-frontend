import OIP from './OIP.jpeg'
function Login(props) {

    const handleUsernameChange = (event) => {
      props.setUsername(event.target.value); 
    }
  
    const handlePasswordChange = (event) => {
      props.setPassword(event.target.value); 
    }
  
   
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.handleLogin();
    }
  
    return (
      
      <form onSubmit={handleSubmit}>
        <div>
        <img style={{
          width: "200px",
          position: "absolute",
          left: "400px"
        }} src="https://www.bimsbagalkot.ac.in/images/beeluru_shri.jpg" />
        <img style={{
          width: "200px",
          position: "absolute",
          right: "400px"
        }} src={OIP} />
        <h1 className='heading_login_box' style={{ fontSize: "3.2em", color: "rgb(255, 153, 0)", textShadow: "10px 6px 6px black", lineHeight: "0.6" }}><p>B. V. V. Sangha's</p>Biluru Gurubasava Mahaswamiji <p>Institute of Technology, Mudhol-587313</p></h1>
      </div>
        <label style={{left:"800px",position:"relative",top:"250px",fontSize:"40px",fontWeight:"bold"}}>
          Username:
          <input type="text" value={props.username} onChange={handleUsernameChange} style={{fontSize:"40px"}}/>
        </label>
        <label style={{left:"170px",position:"relative",top:"350px",fontSize:"40px",fontWeight:"bold"}}>
          Password:
          <input type="password" value={props.password} onChange={handlePasswordChange} style={{fontSize:"40px"}}/>
        </label>
        
        <button type="submit" style={{position:"relative",left:"50px",top:"450px",fontSize:"30px",fontWeight:"bold"}}>Login</button>
      </form>
    );
  }
  export default Login;