<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/Lowongan','LowonganController@index');
Route::get('/Lowongan/{namaLowongan}/{lokasi}', 'LowonganController@show');
Route::post('/Lowongan','LowonganController@store');
Route::get('/Lowongan/{id}', 'LowonganController@showDetail');
Route::get('/Lamaran/{namaPelamar}', 'LamaranController@show');
Route::get('/Lamaran/{id}/{namaLowongan}', 'LamaranController@showLowongan');
Route::delete('/Lamaran/{id}', 'LamaranController@destroy');

// Route::post('/Lowongan','LowonganController@store');
