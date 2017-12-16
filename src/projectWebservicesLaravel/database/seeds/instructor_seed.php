<?php

use Illuminate\Database\Seeder;

class instructor_seed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('instructor')->insert([
            'name' => 'Bert Van Eyken',
            'active' => 1,
            'email' => 'bert@gmail.com',
            'password' => bcrypt('secret'),
            'remember_token'=> str_random(10),
        ]);
        DB::table('instructor')->insert([
            'name' => 'Yves Van Langenhove',
            'active' => 1,
            'email' => 'yves@gmail.com',
            'password' => bcrypt('secret'),
            'remember_token'=> str_random(10),
        ]);
        DB::table('instructor')->insert([
            'name' => 'Jef Szeker',
            'active' => 1,
            'email' => 'Jef@gmail.com',
            'password' => bcrypt('secret'),
            'remember_token'=> str_random(10),
        ]);
        DB::table('instructor')->insert([
            'name' => 'Didier Kenens',
            'active' => 1,
            'email' => 'didi@gmail.com',
            'password' => bcrypt('secret'),
            'remember_token'=> str_random(10),
        ]);
        DB::table('instructor')->insert([
            'name' => 'Steven Thielemans',
            'active' => 0,
            'email' => 'steve@gmail.com',
            'password' => bcrypt('secret'),
            'remember_token'=> str_random(10),
        ]);
    }
}
