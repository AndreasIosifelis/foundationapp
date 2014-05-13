<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User_model extends CI_Model
{
    public $errors = array();
    
    public function isLoggedIn()
    {
        return !$this->session->userdata("logged_in") ? false : true;
    }
    
    public function login($username, $password)
    {
        if(empty($username) || empty($password))
        {
            $this->errors[] = 103;
        }
        
        if(strlen($username) != 128 || strlen($password) != 128)
        {
            $this->errors[] = 104;
        }
        
        //select user
        $this->db->where("username", $username);
        $this->db->limit(1);
        $query = $this->db->get("persons");
        $count = $query->num_rows;
        if($count !== 1)
        {
            $this->errors[] = 105;
        }
        else
        {
            $user = $query->result();
            $user = $user[0];
            $userIdc = $user->id;
            $dbUsername = $user->username;
            $dbPassword = $user->password;
            $dbSalt = $user->salt;
            $dbLoginCount = $user->loginCount;
            


            $saltedPassword = hash("sha512", $password.$dbSalt);
            
          
            
            if($saltedPassword !== $dbPassword)
            {
                $this->errors[] = 106;
            }
            else
            {
               $userToken = hash("sha512", 
                       $user->id.
                       $this->session->userdata("ip_address").
                       time().
                       $this->session->userdata("user_agent").
                       $this->session->userdata("session_id"));               
               $this->session->set_userdata("logged_in", TRUE);
               $this->session->set_userdata("full_name", $user->firstName." ".$user->lastName);
               $this->session->set_userdata("user_id", $user->id);
               $this->session->set_userdata("user_token", $userToken);
               $this->session->set_userdata("lang_id",$user->langId);
            }
        } 
        
    }
    
    public function logout()
    {
        $this->session->unset_userdata("logged_in");
        $this->session->unset_userdata("full_name");
        $this->session->unset_userdata("user_id");
        $this->session->unset_userdata("user_token");
        $this->session->unset_userdata("lang_id");
    }
}

