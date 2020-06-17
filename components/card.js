import React from "react";
import Link from "next/link";

const Card = () => (
  <div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-image">
          <img src="https://blog.tiket.com/wp-content/uploads/Gambar-Pemandangan-Alam-Terindah-Gunung-Krakatau.jpg" />
        </div>
        <div className="card-content">
          <div className="row">
            <div className="col m3 s3" style={{ marginTop: 10 }}>
              <img
                src="https://i0.wp.com/mojok.co/terminal/wp-content/uploads/2019/11/deddy.jpg?resize=800%2C540&ssl=1"
                alt=""
                className="circle responsive-img"
              ></img>
            </div>
            <div className="col m9 s9">
              <p style={{ fontWeight: 500, fontSize: 18 }}>Video Title</p>
              <p class="grey-text text-lighten-1">Deddy Corbuzier</p>
            </div>
          </div>
        </div>
        <div className="card-action">
          <Link href="/video">Watch this</Link>
        </div>
      </div>
    </div>
    <style jsx>{`
      .card:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    `}</style>
  </div>
);

export default Card;
