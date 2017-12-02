let process = {
	menu:function(){
		let content = <ul>
			<center><h1><a href='#' onClick={process.page1}>Click this for more !!!</a></h1></center>
		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
				<font color="green"><h1>Kyrie Irving</h1></font><br/> <img src="img/11.jpg" height="400" width="300"></img><br/>
				Full Name:<b> Kyrie Andrew Irving</b><br/>
				Team: Boston Celtics<br/>
				Position: Point Guard<br/>
Jersey Number:  2 (Cavaliers), 11 (Celtics)<br/>
Height: 6-2 / 1.88 mts<br/>
Weight: 191 lbs / 86.6 kg<br/>
Born: March 23, 1992 in Melbourne, Australia<br/>
High-School:  Saint Patrick in Elizabeth, New Jersey<br/>
College:  Duke University<br/>
Drafted:  by the Cleveland Cavaliers with No. 1 overall pick in round 1 of the 2011 NBA Draft<br/>
NBA Seasons:  NBA Seasons 7 (3 Playoffs)<br/>
NBA Titles: NBA Championship 1 Championship<br/>
All-Star: 4 times - 1 MVP<br/>
				<a href='#' onClick={process.page6}>prev</a><br/>
				<a href='#' onClick={process.page2}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				<center>
				<font color="purple"><h1>Kobe Bryant</h1></font><br/> <img src="img/24.jpg" height="400" width="300"></img><br/>
				Full Name:<b> Kobe Bean Bryant</b><br/>
Position: Shooting Guard<br/>
Jersey Number:  8 (Lakers), 24 (Lakers)<br/>
Height: 6-6 / 1.98 mts<br/>
Weight: 205 lbs / 93.0 kg<br/>
Nickname: Black Mamba, Mr. 81, KB24<br/>
Born: August 23, 1978 in Philadelphia, Pennsylvania, USA<br/>
High-School:  Lower Merion in Ardmore, Pennsylvania<br/>
College:  -<br/>
Drafted:  by the Charlotte Hornets with No. 13 overall pick in round 1 of the 1996 NBA Draft<br/>
NBA Seasons:  NBA Seasons 20 (15 Playoffs)<br/>
NBA Titles: NBA Championship 5 Championships<br/>
All-Star: 18 times (played 15 times) - 4 MVP<br/>
				<a href='#' onClick={process.page1}>prev</a><br/>
				<a href='#' onClick={process.page3}>next</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
				<center>
				<font color="maroon"><h1>Lebron James</h1></font><br/> <img src="img/6.jpg" height="400" width="300"></img><br/>
				Full Name:<b> LeBron Raymone James</b><br/>
Team: Cleveland Cavaliers<br/>
Position: Small Forward / Shooting Guard<br/>
Jersey Number:  23 (Cavaliers), 6 (Heat)<br/>
Height: 6-8 / 2.03 mts<br/>
Weight: 250 lbs / 113.4 kg<br/>
Nickname: King James<br/>
Born: December 30, 1984 in Akron, Ohio, USA<br/>
High-School:  Saint Vincent-Saint Mary in Akron, Ohio<br/>
College:  -<br/>
Drafted:  by the Cleveland Cavaliers with No. 1 overall pick in round 1 of the 2003 NBA Draft<br/>
NBA Seasons:  NBA Seasons 15 (12 Playoffs)<br/>
NBA Titles: NBA Championship 3 Championships<br/>
All-Star: 13 times - 2 MVP<br/>
				<a href='#' onClick={process.page2}>prev</a><br/>
				<a href='#' onClick={process.page4}>next</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div>
				<center>
				<font color="white "><h1>James Harden</h1></font><br/> <img src="img/13.jpg" height="400" width="300"></img><br/>
				Full Name: <b> James Edward Harden Jr.</b><br/>
Team: Houston Rockets<br/>
Position: Shooting Guard / Point Guard<br/>
Jersey Number:  13 (Thunder, Rockets)<br/>
Height: 6-5 / 1.96 mts<br/>
Weight: 220 lbs / 99.8 kg<br/>
Born: August 26, 1989 in Los Angeles, California, USA<br/>
High-School:  Artesia in Lakewood, California<br/>
College:  Arizona State University<br/>
Drafted:  by the Oklahoma City Thunder with No. 3 overall pick in round 1 of the 2009 NBA Draft<br/>
NBA Seasons:  NBA Seasons 9 (8 Playoffs)<br/>
NBA Titles: NBA Championship none<br/>
All-Star: 5 times<br/>
				<a href='#' onClick={process.page3}>prev</a><br/>
				<a href='#' onClick={process.page5}>next</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div>
				<center>
				<font color="black"><h1>Allen Iverson</h1></font><br/> <img src="img/3.jpg" height="400" width="300"></img><br/>
				Full Name:<b> Allen Ezail Iverson</b><br/>
Position: Guard<br/>
Jersey Number:  3 (76ers, Nuggets), 1 (Pistons), 3 (Grizzlies)<br/>
Height: 6-0 / 1.83 mts<br/>
Weight: 165 lbs / 74.8 kg<br/>
Born: June 07, 1975 in Hampton, Virginia, USA<br/>
High-School:  Bethel in Hampton, Virginia<br/>
College:  Georgetown University<br/>
Drafted:  by the Philadelphia 76ers with No. 1 overall pick in round 1 of the 1996 NBA Draft<br/>
NBA Seasons:  NBA Seasons 14 (8 Playoffs)<br/>
NBA Titles: NBA Championship none<br/>
All-Star: 11 times (played 9 times) - 2 MVP<br/>
				<a href='#' onClick={process.page4}>prev</a><br/>
				<a href='#' onClick={process.page6}>next</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div>
				<center>
				<font color="red"><h1>Michael Jordan</h1></font><br/> <img src="img/23.jpg" height="400" width="300"></img><br/>
				 Full Name:<b> Michael Jeffrey Jordan</b><br/>
Position: Shooting Guard / Small Forward<br/>
Jersey Number:  23 (Bulls), 45 (Bulls), 23 (Wizards)<br/>
Height: 6-6 / 1.98 mts<br/>
Weight: 216 lbs / 98.0 kg<br/>
Nickname: Air Jordan, His Airness, MJ<br/>
Born: February 17, 1963 in Brooklyn, New York, USA<br/>
High-School:  Emsley A. Laney in Wilmington, North Carolina<br/>
College:  University of North Carolina<br/>
Drafted:  by the Chicago Bulls with No. 3 overall pick in round 1 of the 1984 NBA Draft<br/>
NBA Seasons:  NBA Seasons 15 (13 Playoffs)<br/>
NBA Titles: NBA Championship 6 Championships<br/>
All-Star: 14 times (played 13 times) - 3 MVP<br/>
				<a href='#' onClick={process.page5}>prev</a><br/>
				<a href='#' onClick={process.page1}>next</a>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><h1>
					please wait for a while....
				</h1></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},5000);