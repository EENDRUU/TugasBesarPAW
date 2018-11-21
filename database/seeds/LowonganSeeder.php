<?php

use Illuminate\Database\Seeder;

class LowonganSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker\Factory::create(); //import library faker

        $limit = 5; //batasan berapa banyak data

        for ($i = 0; $i < $limit; $i++) {
            DB::table('lowongans')->insert([ //mengisi datadi database
                'namaLowongan' => $faker->name,
                'namaPerusahaan' => $faker->name,
                'lokasi' => $faker->address,
                'pendidikan'=> $faker->name,
                'deskripsiLowongan'=> $faker->text,
                'deskripsiPerusahaan'=> $faker->text,
            ]);
        }
    }
}
