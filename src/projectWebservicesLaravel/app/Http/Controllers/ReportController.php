<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Report;

class ReportController extends Controller
{
    public function addReport(Request $request)
    {
      $report = new Report();
      $report->date = $request->input('date');
      $report->instructorId=$request->input('instructorId');
      $report->body = $request->input('body');
      $report->save();
      return response()->json(['report' => $report]);
    }

    public function getReports()
    {
      $report= Report::orderBy('date','desc')->get();

      //$report = {"ok", "ok"
      /*
      $response = [
        $report
      ];
      */
      return response()->json($report);
      //return response()->json("ok");
    }

    public function getReport($date)
    {
      $report = Report::where('date',$date)->first();
      if(!$report){
        return response()->json(['message' => $date.' No reports found'], 404);
      }
      //$report="oke";
      return response()->json($report);
    }

    public function getReportById($id)
    {
      $report = Report::where('id',$id)->first();
      if(!$report){
        return response()->json(['message' => $date.' No reports found'], 404);
      }
      //$report="oke";
      return response()->json($report);
    }

    public function patchReport(Request $request)
    {
      $report = Report::find($request->input('id'));
      if(!$report){
        return response()->json(['message' => 'Document not found', 'searched with id' => $request->input('id')], 404);
      }
      $report->body = $request->input('body');
      $report->save();
      return response()->json(['report' => $report]);
    }

    public function deleteReport($id)
    {
      //Report::destroy($id); //deleten zonder eerst op te halen uit de db.
      //return response()->json(['report' => 'deleted successfully']);

      $report = Report::find($id);
      if(!$report){
        return response()->json(['message' => 'Document not found', 'searched with id' => id], 404);
      }
      $report->delete();
      return response()->json(['report' => 'deleted successfully']);
    }

}
