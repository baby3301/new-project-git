<?php
	
	function dbConnect()
	{

		$servername = "localhost";
		// $servername = "localhost";
		$username = "root";
		$password = "654321";
		$database = "acet";
		// Create connection
		$conn = mysqli_connect($servername, $username, $password,$database);
		mysqli_set_charset($conn,"utf8");
		// Check connection
		if (!$conn) {
		    die("Connection failed: " . mysqli_connect_error());
		}
		else
		{				
			return $conn;
		}
	}	
     
		function getdata()
		{
			$data = array();
			$sql = 'SELECT * FROM registers';
	         $result = mysqli_query(dbConnect(), $sql);

	         while($row = mysqli_fetch_assoc($result)) {
		        $data[] = $row;
		    }

	        return $data;
		}

        function checkphone($phone)
		{
			
			$sql = 'SELECT * FROM registers where phone='.$phone;
	         $result = mysqli_query(dbConnect(), $sql);

	         if (mysqli_num_rows($result) > 0) {
	            return 1;
	         } else {
	            return 0;
	         }

				
		}

		function checklogin($username,$password)
		{
			
			$sql = 'SELECT * FROM admin where username="'.$username.'" and password="'.md5($password).'"';
	         $result = mysqli_query(dbConnect(), $sql);

	         if (mysqli_num_rows($result) > 0) {
	            return 1;
	         } else {
	            return 0;
	         }

				
		}


		function insertregister($fullname,$email,$phone,$address,$utm_source,$utm_medium,$utm_campaign,$date_create)
		{
									
			$sql = "INSERT INTO registers (fullname,email,phone,address,utm_source,utm_medium,utm_campaign,date_create) VALUES ('".$fullname."','".$email."','".$phone."','".$address."','".$utm_source."','".$utm_medium."','".$utm_campaign."','".$date_create."')";
			$conn = dbConnect();			
			$conn->query($sql);
		
			
		}
		
		// function select_tinhthanh()
		// {
			
			
		// 	$data = array();
		// 	$sql = 'SELECT * FROM `tinhthanh` ORDER BY `TenTinhThanh`';
	 //         $result = mysqli_query(dbConnect(), $sql);

	 //         while($row = mysqli_fetch_assoc($result)) {
		//         $data[] = $row;
		//     }

	 //        return $data;
			
			
		// }
		
		// function select_quanhuyen($id_tinhthanh)
		// {
		
						
		// 	$data = array();
		// 	$sql = "SELECT * FROM `quanhuyen` where MaTinhThanh = $id_tinhthanh";
	 //         $result = mysqli_query(dbConnect(), $sql);

	 //         while($row = mysqli_fetch_assoc($result)) {
		//         $data[] = $row;
		//     }

	 //        return $data;
			
		// }



	
?>	