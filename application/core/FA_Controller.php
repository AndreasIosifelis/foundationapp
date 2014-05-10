<?php

class FA_Controller extends CI_Controller
{
    private $invalidClientError = 101;
    private $invalidUserError = 102;
    
    public function request($input = "json")
    {
        return json_decode($this->input->post($input), true);
    }
    
    public function response($response)
    {
        $this->output->set_header("x-frame-origin:SAMEORIGIN");
        $this->output->set_content_type("application/json");
        echo json_encode($response);
    }
    
    public function authUser()
    {
        if($this->session->userdata("logged_in") === FALSE)
            $this->errorResponse ($this->invalidUserError);
    }
    
    public function authClient()
    {
        if($this->input->post("sessionId") !== $this->session->userdata("session_id"))
            $this->errorResponse ($this->invalidClientError);
    }
    
    private function errorResponse($error)
    {
        $response["success"] = FALSE;
        $response["error"] = $error;
        $this->response($response);
        die();
    }
}

