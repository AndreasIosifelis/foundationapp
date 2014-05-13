<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends FA_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model("User_model");
    }
    public function index()
    {
        $data["userInfo"] = array();
        $data["userInfo"]["sessionId"] = $this->session->userdata("session_id");
        $data["userInfo"]["langId"] = $this->session->userdata("lang_id") ? $this->session->userdata("lang_id") : "en";
        $data["userInfo"]["loggedIn"] = $this->session->userdata("logged_in");
        $this->load->view("main", $data);
    }
    
    public function login()
    {
        $this->authClient();
        $request = $this->request();
        $username = $request["username"];
        $password = $request["password"];
        
        $this->User_model->login($username, $password);
        if(empty($this->User_model->errors))
        {
            $response["success"] = true;
            $response["userInfo"] = array(
                "sessionId" => $this->session->userdata("session_id"),
                "langId" => $this->session->userdata("lang_id"),
                "loggedIn"=> $this->session->userdata("logged_in"),
                "userToken"=>$this->session->userdata("user_token"),
                "userId"=>$this->session->userdata("user_id")
            );
            $response["lookupInfo"] = "lookupInfo";
        }
        else
        {
            $response["success"] = false;
            $response["messages"] = $this->User_model->errors;
        }
        $this->response($response);
    }
    
    public function logout()
    {
        $this->User_model->logout();
        $response["success"] = TRUE;
        $response["userInfo"] = array();
        $response["userInfo"]["sessionId"] = $this->session->userdata("session_id");
        $response["userInfo"]["langId"] = $this->session->userdata("lang_id") ? $this->session->userdata("lang_id") : "en";
        $response["userInfo"]["loggedIn"] = $this->session->userdata("logged_in");
        $this->response($response);
    }
}

