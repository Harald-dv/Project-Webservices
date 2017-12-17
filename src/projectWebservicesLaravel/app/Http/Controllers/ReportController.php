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
      $report->body = $request->input('content');
      $report->save();

      //return response()->json(['report' => $report]);
    }

    public function getReports()
    {
      $report= Report::all();

      //$report = {"ok", "ok"
      /*
      $response = [
        $report
      ];
      */
      return response()->json($report);
      //return response()->json("ok");
    }

    public function getReport(Request $request)
    {
      $report = Report::find($request);
      if(!$report){
        return response()->json(['message' => 'Document not found'], 404);
      }
      return response()->json([$report]);
    }

    public function patchReport(Request $request, $date)
    {
      $report = Report::find($date);
      if(!$report){
        return response()->json(['message' => 'Document not found'], 404);
      }
      $report->report=$request->input('content');
      $quote->save();

      //return response()->json(['report' => $report]);
    }
}
