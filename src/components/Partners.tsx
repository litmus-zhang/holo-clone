import Button from "./Button";

const PARTNERS = [
  {
    image: "https://cdn.sanity.io/images/14xthjfi/production/9f18680e5d8d034e1d3eb9f30efb5ce1f1a64d0f-288x100.png?w=288&h=100&auto=format"
  },
  {
    image: "https://cdn.sanity.io/images/14xthjfi/production/a5a0c5538abfebd6b1f549d62c2c76feb20dac0f-288x100.png?w=288&h=100&auto=format"
  },

  {
    image: "https://cdn.sanity.io/images/14xthjfi/production/c75f5f1f81bd490f3eed3a304ebc0a8d9dec5901-224x100.png?w=224&h=100&auto=format"
  },

  {
    image: "https://cdn.sanity.io/images/14xthjfi/production/5a7ce7dab436080f3b0146516a841ba6a253c1e8-288x112.png?w=288&h=112&auto=format"
  },

  {
    image: "https://cdn.sanity.io/images/14xthjfi/production/505702c2bd67d6c77e8d896d21326da51923d873-288x112.png?w=288&h=112&auto=format"
  },
  {
    image: "https://cdn.sanity.io/images/14xthjfi/production/47c3feb9c1c00ab985afb86cebdd5b0d16a1a5af-288x112.png?w=288&h=112&auto=format"
  },

]

export default function Partners() {
  return (
    <div className="bg-black w-full p-20 flex flex-col items-center">
      <div className="flex flex-wrap items-center gap-4 justify-center my-4">
        {
          PARTNERS.map(({ image }, i) => <div className="h-fit w-44" key={i}>
            <img src={image} alt="" />
          </div>
          )
        }
      </div>
      <Button
        text="Read our customer stories"
        type="button"
        variant={"white"}

      />
    </div>
  )
}
