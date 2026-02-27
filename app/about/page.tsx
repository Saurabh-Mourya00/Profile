import React from "react";
import Image from 'next/image';

export default function About() {
  return (
    <main style={{ 
      minHeight: "80vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      background: "var(--color-bg-secondary)", 
      color: "var(--color-text-main)", 
      borderRadius: "1.5rem", 
      padding: "3rem 2rem", 
      margin: "4rem auto", 
      maxWidth: 700,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      border: "1px solid rgba(255,255,255,0.05)"
    }}>
      
      {/* Profile Section */}
      <div style={{ 
        position: "relative",
        padding: "8px",
        background: "linear-gradient(135deg, var(--color-primary), transparent)",
        borderRadius: "50%",
        marginBottom: 24
      }}>
        <div style={{ 
          width: 150, 
          height: 150, 
          borderRadius: "50%", 
          overflow: "hidden", 
          border: "4px solid var(--color-bg-secondary)",
          position: "relative" 
        }}>
          <Image 
            src="/Saurabh_imresizer.jpg" 
            alt="Saurabh Mourya" 
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      <h1 style={{ 
        fontSize: "2.5rem", 
        fontWeight: 800, 
        color: "var(--color-primary)", 
        marginBottom: 8,
        letterSpacing: "-0.5px"
      }}>
        Saurabh Mourya
      </h1>
      
      <p style={{ 
        fontSize: "1.1rem", 
        fontWeight: 500, 
        opacity: 0.8, 
        marginBottom: 32,
        textAlign: "center",
        maxWidth: "80%"
      }}>
        MLOPs Engineer • AI Practitioner • Freelancer
      </p>

      {/* Bio Section */}
      <div style={{ 
        lineHeight: "1.8", 
        textAlign: "center", 
        marginBottom: 40,
        fontSize: "1.05rem",
        color: "var(--color-text-main)"
      }}>
        <p style={{ marginBottom: 20 }}>
          I am an <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>AI Enthusiast</span> & software engineer driven by the vision of building impactful products that improve users' lives. 
        </p>
        
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "8px", 
          marginTop: "16px" 
        }}>
          {["Python", "Django", "MLOps", "SQL", "Scikit-Learn", "XGBoost", "Pandas"].map(skill => (
            <span key={skill} style={{
              padding: "4px 12px",
              borderRadius: "20px",
              background: "var(--color-bg-tertiary)",
              fontSize: "0.85rem",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.1)"
            }}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Info Grid */}
      <div style={{ 
        width: "100%", 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "20px",
        paddingTop: "20px",
        borderTop: "1px solid var(--color-bg-tertiary)"
      }}>
        <div style={{ textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "0.8rem", textTransform: "uppercase", opacity: 0.6 }}>Email</strong>
          <a href="mailto:mouryasaurabh9936@gmail.com" style={{ color: "var(--color-primary)", textDecoration: "none" }}>mouryasaurabh9936@gmail.com</a>
        </div>
        
        <div style={{ textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "0.8rem", textTransform: "uppercase", opacity: 0.6 }}>Location</strong>
          <span>Noida, UP, India</span>
        </div>
      </div>
    </main>
  );
}