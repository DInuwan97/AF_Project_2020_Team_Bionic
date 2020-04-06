import React from 'react';

export default function SingleProduct() {
  return (
    
<div className="products">	 
		<div className="container">  
			<div className="single-page">
				<div className="single-page-row" id="detail-21">
					<div className="col-md-6 single-top-left">	
						<div className="flexslider">
							<ul className="slides">
								<li data-thumb={require("./assets/images/s1.jpg")}>
									<div className="thumb-image detail_images"> <img src={require("./assets/images/s1.jpg")} data-imagezoom="true" className="img-responsive" alt="" /> </div>
								</li>
								<li data-thumb={require("./assets/images/s2.jpg")}>
									 <div className="thumb-image"> <img src={require("./assets/images/s2.jpg")} data-imagezoom="true" className="img-responsive" alt="" /> </div>
								</li>
								<li data-thumb={require("./assets/images/s3.jpg")}>
								   <div className="thumb-image"> <img src={require("./assets/images/s3.jpg")} data-imagezoom="true" className="img-responsive" alt="" /> </div>
								</li> 
							</ul>
						</div>
					</div>
					<div className="col-md-6 single-top-right">
						<h3 className="item_name"> Black Handbag</h3>
						<p>Processing Time: Item will be shipped out within 2-3 working days. </p>
						<div className="single-rating">
							<ul>
								<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
								<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
								<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
								<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
								<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
								<li className="rating">20 reviews</li>
								<li><a href="#">Add your review</a></li>
							</ul> 
						</div>
						<div className="single-price">
							<ul>
								<li>$54</li>  
								<li><del>$60</del></li> 
								<li><span className="w3off">10% OFF</span></li> 
								<li>Ends on: Oct,15th</li>
								<li><a href="#"><i className="fa fa-gift" aria-hidden="true"></i> Coupon</a></li>
							</ul>	
						</div> 
						<p className="single-price-text">Fusce a egestas nibh, eget ornare erat. Proin placerat, urna et consequat efficitur, sem odio blandit enim, sit amet euismod turpis est mattis lectus. Vestibulum maximus quam et quam egestas imperdiet. In dignissim auctor viverra. </p>
						<form action="#" method="post">
							<input type="hidden" name="cmd" value="_cart" />
							<input type="hidden" name="add" value="1" /> 
							<input type="hidden" name="w3ls1_item" value="Handbag" /> 
							<input type="hidden" name="amount" value="540.00" /> 
							<button type="submit" className="w3ls-cart" ><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
						</form>
						<button className="w3ls-cart w3ls-cart-like"><i className="fa fa-heart-o" aria-hidden="true"></i> Add to Wishlist</button>
					</div>
				   <div className="clearfix"> </div>  
				</div>
			</div> 
				

			<div className="collpse tabs">
				<h3 className="w3ls-title">About this item</h3> 
				<div className="panel-group collpse" id="accordion" role="tablist" aria-multiselectable="true">
					<div className="panel panel-default">
						<div className="panel-heading" role="tab" id="headingOne">
							<h4 className="panel-title">
								<a className="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									<i className="fa fa-file-text-o fa-icon" aria-hidden="true"></i> Description <span className="fa fa-angle-down fa-arrow" aria-hidden="true"></span> <i className="fa fa-angle-up fa-arrow" aria-hidden="true"></i>
								</a>
							</h4>
						</div>
						<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
							<div className="panel-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading" role="tab" id="headingTwo">
							<h4 className="panel-title">
								<a className="collapsed pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									<i className="fa fa-info-circle fa-icon" aria-hidden="true"></i> additional information <span className="fa fa-angle-down fa-arrow" aria-hidden="true"></span> <i className="fa fa-angle-up fa-arrow" aria-hidden="true"></i>
								</a> 
							</h4>
						</div>
						<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
							<div className="panel-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading" role="tab" id="headingThree">
							<h4 className="panel-title">
								<a className="collapsed pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									<i className="fa fa-check-square-o fa-icon" aria-hidden="true"></i> reviews (5) <span className="fa fa-angle-down fa-arrow" aria-hidden="true"></span> <i className="fa fa-angle-up fa-arrow" aria-hidden="true"></i>
								</a>
							</h4>
						</div>
						<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
							<div className="panel-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading" role="tab" id="headingFour">
							<h4 className="panel-title">
								<a className="collapsed pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
									<i className="fa fa-question-circle fa-icon" aria-hidden="true"></i> help <span className="fa fa-angle-down fa-arrow" aria-hidden="true"></span> <i className="fa fa-angle-up fa-arrow" aria-hidden="true"></i>
								</a>
							</h4>
						</div>
						<div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
							<div className="panel-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
				</div>
			</div>
		
		</div>
	</div>
  );
}