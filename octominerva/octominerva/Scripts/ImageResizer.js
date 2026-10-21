var HEIGHT_PERCENTAGE = 0.0;
//var previousImage;

function setupBackgroundResizer() {
    var img = $(".om-mainContainer .om-mainPaneBackground");

    if (!img[0].complete) {
        //console.log("Image not loaded: adding load event");
        img.load(function () {
            handleLoadedImage();
        });

        //if (previousImage) {
        //    previousImage.addClass("previous").css("opacity", 1);
        //    $(".om-mainContainer").prepend(previousImage);
        //}
    } else {
        //console.log("Image loaded: handling directly");
        handleLoadedImage();
    }


    function handleLoadedImage() {
        resizeImage(img);

        //$(".om-mainContainer").hide().css("opacity", 1).fadeIn();
        //$(".om-mainPaneBackground.previous").detach();

        img.detach();
        $(".om-mainPaneBackground").remove();
        $(".om-mainPane").prepend(img);


        img.hide().css("opacity", 1).fadeIn();

        $(window).resize(function () {
            resizeImage(img);
        });
    }

    function resizeImage(image) {
        if (!image[0].complete) {
            return;
        }

        var oH = image.height();
        var oW = image.width();
        var ratio = oW / oH;

        var cH = $(".om-mainPane").height();
        var cW = $(".om-mainPane").width();

        var fH = cH * HEIGHT_PERCENTAGE;
        var fW = fH * ratio;

        if (fW < cW) {
            fW = cW;
            fH = cW / ratio;
        }

        image.css({
            width: fW,
            height: fH
        });

        //console.log("Source Image size: " + image.width() + " x " + image.height() + " -- Ratio: " + ratio);
        //console.log("Container height : " + cH);
        //console.log("Final Image size : " + image.width() + " x " + image.height());
        //previousImage = image.clone();
    }
}

function resizeIFrames() {
    $("iframe").each(function () {
        $(this).removeAttr("width");
        //$(this).removeAttr("height");
    });
}