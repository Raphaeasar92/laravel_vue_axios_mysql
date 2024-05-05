<?php

namespace App\Http\Controllers\ApiDash;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Client;

class HomeController extends Controller
{
    public function index() 
    {
        $clients = Client::all();

        $products = [
            [
            'id' => 1,
            'name' => 'Video Game',
            'value' => '10.50'
            ]
        ];
        return response()->json([
            'clients' => $clients,
            'products' => $products,
        ]);
    }
}
