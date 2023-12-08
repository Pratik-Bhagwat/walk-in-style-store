// Importing necessary components and libraries
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Container from "../Container/Container";
import { Models } from "appwrite";

// ProductInfoDialog component
function ProductInfoDialog({
  product,
}: {
  product: Models.Document | undefined;
}) {
  // Component return
  return (
    <Dialog>
      {/* Trigger for opening the dialog */}
      <DialogTrigger asChild>
        <div className="py-5 w-fit">
          <p className="hover:text-[#757575] hover:cursor-pointer">
            View Product Details
          </p>
          <div className="border border-black w-[145px] mt-1"></div>
        </div>
      </DialogTrigger>
      <Container>
        {/* Dialog content */}
        <DialogContent>
          {/* Product details */}
          <div className="flex items-center gap-6">
            {/* Product image */}
            <div className="self-end">
              <img
                src={product?.thumbnail}
                alt="shoeImg"
                className="h-16 w-16"
              />
            </div>
            {/* Product name and price */}
            <div>
              <h3 className="font-medium">{product?.name}</h3>
              <h3 className="font-medium">MRP : ₹ {product?.price}</h3>
              <p className="text-[#757575] text-lg mt-3">
                incl. of taxes <br /> (Also includes all applicable duties)
              </p>
            </div>
          </div>

          {/* Product description */}
          <div className="mt-4">
            <p className="text-lg">{product?.description}</p>
          </div>
        </DialogContent>
      </Container>
    </Dialog>
  );
}

// Exporting the ProductInfoDialog component
export default ProductInfoDialog;
