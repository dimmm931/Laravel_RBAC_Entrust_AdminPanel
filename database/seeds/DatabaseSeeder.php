<?php
//This is the MAIN SEEDER!!!!

use Illuminate\Database\Seeder;
//use App\database\seeds\SeedersFiles\ShopSimpleSeeder;
//use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		//specify whta data to run
		$this->call('Users_Seeder');  //fill DB table {users} with data
		$this->call('Roles_Seeder');  //fill DB table {roles} with data {4 roles}
		$this->call('RoleUsers_Seeder');  //fill DB table {role_user} with data {assign admin to Dima}
		$this->command->info('Seedering action was successful!');
    }
	
	
  
}
//------------------- ALL SEEDERS CLASS -----------------------------------

//fill DB table {users} with data 
class Users_Seeder extends Seeder {
    public function run()
    {
        DB::table('users')->delete();  //whether to Delete old materials
        //User::create(['email' => 'foo@bar.com']);
        DB::table('users')->insert(['id' => 1, 'name' => 'Admin', 'email' => 'admin@ukr.net', 'password' => bcrypt('adminadmin') ]);
	    DB::table('users')->insert(['id' => 2, 'name' => 'Dima',  'email' => 'dimmm931@gmail.com', 'password' => bcrypt('dimadima') ]);
	    DB::table('users')->insert(['id' => 3, 'name' => 'Olya',  'email' => 'olya@gmail.com', 'password' => bcrypt('olyaolya') ]);
    }
}


//fill DB table {roles} with data (create 4 roles)
class Roles_Seeder extends Seeder {
    public function run()
   {
        DB::table('roles')->delete();  //whether to Delete old materials
        //User::create(['email' => 'foo@bar.com']);
        DB::table('roles')->insert(['id' => 12, 'name' => 'owner', 'display_name' => 'Project Owner', 'description' => 'User is the owner of a given project', 'created_at' => date('Y-m-d H:i:s') ]);
	    DB::table('roles')->insert(['id' => 13, 'name' => 'admin', 'display_name' => 'User Administrator', 'description' => 'User is allowed to manage and edit other users', 'created_at' =>  date('Y-m-d H:i:s') ]);
        DB::table('roles')->insert(['id' => 14, 'name' => 'manager', 'display_name' => 'Company Manager', 'description' => 'User is a manager of a Department', 'created_at' =>  date('Y-m-d H:i:s') ]);
        DB::table('roles')->insert(['id' => 15, 'name' => 'commander', 'display_name' => 'custom role', 'description' => 'Wing Commander', 'created_at' => date('Y-m-d H:i:s') ]);
    }
}



//fill DB table {role_user} with data 
class RoleUsers_Seeder extends Seeder {
    public function run()
    {
        DB::table('role_user')->delete();  //whether to Delete old materials
        DB::table('role_user')->insert(['user_id' => 2, 'role_id' => 13 ]);
    }
}
