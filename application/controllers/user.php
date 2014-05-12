<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends FA_Controller
{
    public function index()
    {
        $data["userInfo"] = array();
        $data["userInfo"]["sessionId"] = $this->session->userdata("session_id");
        $data["userInfo"]["langId"] = $this->session->userdata("lang_id") ? $this->session->userdata("lang_id") : "en";
        $data["userInfo"]["loggedIn"] = $this->session->userdata("logged_in");
        $this->load->view("main", $data);
    }
    
    public function doLogin()
    {
        sleep(4);
        
        return $rtr;
    }
}

