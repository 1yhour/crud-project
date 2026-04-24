<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

Route::redirect('/','/student');
Route::get('/student', [StudentController::class, 'index']);