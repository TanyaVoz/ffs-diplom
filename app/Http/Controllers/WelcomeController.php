<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    protected $defaultViews = [
        'index' => 'welcome',
        'login' => 'admin',
    ];

    public function index()
    {
        return view($this->defaultViews['index']);
    }

    public function login()
    {
        return view($this->defaultViews['login']);
    }
}


