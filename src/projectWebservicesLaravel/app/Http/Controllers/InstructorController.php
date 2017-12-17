<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Instructor;

class InstructorController extends Controller
{
    public function getInstructors()
    {
      $instructor= Instructor::all();

      return response()->json($instructor);
    }

    public function getInstructor(Request $request)
    {
      $instructor = Report::find($request);
      if(!$instructor){
        return response()->json(['message' => 'Document not found'], 404);
      }
      return response()->json($instructor);
    }
}
