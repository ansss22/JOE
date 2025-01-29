document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Services hover effect
  const serviceCards = document.querySelectorAll(".services .card")
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "var(--highlight-color)"
    })
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "var(--accent-color)"
    })
  })

  // Team member info popup
  const teamCards = document.querySelectorAll(".team .card")
  teamCards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.querySelector(".card-title").textContent
      const role = card.querySelector(".card-text").textContent
      alert(`${name}\n${role}\n\nCliquez pour en savoir plus sur ce membre de l'équipe.`)
    })
  })

  // Event countdown
  const eventDates = document.querySelectorAll(".events .card-body p strong")
  eventDates.forEach((dateElement) => {
    const eventDate = new Date(dateElement.nextSibling.textContent.trim())
    const now = new Date()
    const diffTime = Math.abs(eventDate - now)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    const countdownElement = document.createElement("p")
    countdownElement.textContent = `Dans ${diffDays} jours`
    countdownElement.style.fontWeight = "bold"
    countdownElement.style.color = "var(--primary-color)"
    dateElement.parentNode.after(countdownElement)
  })

  // Gallery functionality
  const galleryLinks = document.querySelectorAll(".gallery-link")
  const galleryOverlays = document.querySelectorAll(".gallery-overlay")

  galleryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)
      const targetOverlay = document.getElementById(targetId)
      targetOverlay.classList.add("active")
    })
  })

  galleryOverlays.forEach((overlay) => {
    const closeBtn = overlay.querySelector(".close")
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault()
      overlay.classList.remove("active")
    })
  })

  // Statistics counter animation
  const counters = document.querySelectorAll(".count")
  const speed = 200

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target")
      const count = +counter.innerText
      const inc = target / speed

      if (count < target) {
        counter.innerText = Math.ceil(count + inc)
        setTimeout(updateCount, 1)
      } else {
        counter.innerText = target
      }
    }

    updateCount()
  })

  // Form validation
  const form = document.querySelector(".contact-form")
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
    }
    form.classList.add("was-validated")
  })

  // Update copyright year
  const fullYearSpan = document.getElementById("fullYear")
  if (fullYearSpan) {
    fullYearSpan.textContent = new Date().getFullYear()
  }
})

