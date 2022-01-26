import Link from "next/link";
const Footer = () => {
  return (
    <div
      style={{
        borderTop: "solid 1px gray",
        marginTop: "10px",
        backgroundColor: "#20B2AA",
      }}
      className='flex flex-col flex-wrap p-10  m-auto mt-10'
    >
      <div style={{ margin: "auto", padding: "10px" }}>
        <p className='text-[#000000] text-center text-2xl font-medium pb-2 cursor-pointer hover:text-red-700'>
          Việt KA TV: Chuyên sản xuất các chương trình Audio & Video.
          <br /> Tổ chức sự kiện chuyên nghiệp.
          <br /> Live streaming HD Video.
        </p>
        <Link href='https://maps.app.goo.gl/nKKtS91qrD6Pu5qh7'>
          <p className='text-[#000000] text-center text-xl font-medium pb-2 cursor-pointer hover:text-red-700'>
            Địa chỉ: 67/9 Ba Mươi Tháng Tư, Trung Dũng, Thành phố Biên Hòa, Đồng
            Nai
          </p>
        </Link>

        <p className='text-[#000000] text-center text-2xl font-medium pb-2 cursor-pointer  hover:text-red-700'>
          <a href='tel:+0983947969'>Phone: 098 394 79 69</a>
        </p>
      </div>

      <div className='flex justify-center pb-5 '>
        <div className='m-2  h-8 w-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <Link href='https://www.facebook.com/vietkatv'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1643172052/logo-facebook_xwiukt.png'
              width={74}
              height={74}
              style={{ borderRadius: "22px" }}
            />
          </Link>
        </div>
        <div className='m-2 h-8 w-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <Link href='https://www.youtube.com/c/VietKATV'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1643172052/youtobe_xmfi1o.png'
              width={74}
              height={74}
              style={{ borderRadius: "22px" }}
            />
          </Link>
        </div>
        <div className='m-2 h-8 w-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <Link href={`http://zalo.me/0983947969`}>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1643172053/zalo_t7xiir.png'
              width={74}
              height={74}
              style={{ borderRadius: "22px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
