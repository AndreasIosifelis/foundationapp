<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends FA_Controller
{
    public function index()
    {
        $data["userLoggedIn"] = $this->session->userdata("logged_in") ? "true" : "false";
        $this->load->view("main", $data);
    }
}

