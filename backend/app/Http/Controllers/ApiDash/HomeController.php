<?php

namespace App\Http\Controllers\ApiDash;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() 
    {
        $clients = [
            [
            'id' => 1,
            'name' => 'José Ricardo',
            'email' => 'jose@gmail.com'
            ],
            [
                'id' => 2,
                'name' => 'Renato da Silva',
                'email' => 'renato@gmail.com'
            ]
        ];
        return response()->json([
            'clients' => $clients
        ]);
    }
}
