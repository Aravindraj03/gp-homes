// import React, { useState } from "react";

// const FAQs = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqItems = [
//     {
//       question: "1.	What documents do I need to register a property?",
//       answer:
//         "For property registration, you need: ✅ Sale Deed & Encumbrance Certificate ✅ Patta & Property Tax Receipts ✅ NOC (No Objection Certificate) from relevant authorities ✅ Identity & address proof",
//     },
//     {
//       question: "Up to what age are they considered children?",
//       answer:
//         "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
//     },
//     {
//       question: "Do you have any discount code?",
//       answer:
//         "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
//     },
//     {
//       question: "How can I get in touch with my hotel?",
//       answer:
//         "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
//     },
//     {
//       question: "On the last day, can I leave the room later?",
//       answer:
//         "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
//     },
//     {
//       question: "Can I cancel my reservation?",
//       answer:
//         "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
//     },
//     {
//       question: "Do you have hotels with a spa?",
//       answer:
//         "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
//     },
//   ];

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="section-padding bg-cream">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <ul className="accordion-box clearfix">
//               {faqItems.map((item, index) => (
//                 <li
//                   className={`accordion block ${
//                     activeIndex === index ? "active" : ""
//                   }`}
//                   key={index}
//                 >
//                   <div
//                     className="acc-btn"
//                     onClick={() => toggleAccordion(index)}
//                   >
//                     {item.question}
//                   </div>
//                   {activeIndex === index && (
//                     <div className="acc-content">
//                       <div className="content">
//                         <div className="text">{item.answer}</div>
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQs;

import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-30 mb-30">F.A.Qs</h3>
            <ul className="accordion-box clearfix">
              <li
                className={`accordion block ${
                  activeIndex === 0 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(0)}>
                  1. What documents do I need to register a property?
                </div>
                {activeIndex === 0 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        For property registration, you need:
                        <ul>
                          <li>Sale Deed & Encumbrance Certificate</li>
                          <li>Patta & Property Tax Receipts</li>
                          <li>
                            NOC (No Objection Certificate) from relevant
                            authorities
                          </li>
                          <li>Identity & address proof</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 1 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(1)}>
                  2. What is the difference between CMDA and DTCP approval?
                </div>
                {activeIndex === 1 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        CMDA (Chennai Metropolitan Development Authority)
                        regulates urban developments within Chennai city limits,
                        whereas DTCP (Directorate of Town and Country Planning)
                        oversees developments in suburban and rural areas.
                        Always choose a <b>CMDA or DTCP-approved property</b>{" "}
                        for legal safety.
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 2 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(2)}>
                  3. What is the minimum down payment required for a home loan?
                </div>
                {activeIndex === 2 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Banks generally finance{" "}
                        <b>up to 80-90% of the property value,</b> meaning you
                        need to arrange <b>10-20% as a down payment</b>.
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className={`accordion block ${
                  activeIndex === 3 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(3)}>
                  4. What security/collateral do I have to provide?
                </div>
                {activeIndex === 3 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Banks usually take some additional securities which are
                        called collateral securities. Collateral could be in the
                        form of guarantee from one or two persons, assignment of
                        life insurance policies, the surrender value of which
                        should be equal to the loan amount, deposit of shares,
                        and units or other securities. These additional
                        securities are taken just in case a loan is not paid
                        back; recourse may be taken to such securities instead
                        of depending upon the mortgage of the property which is
                        the last resort.
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className={`accordion block ${
                  activeIndex === 4 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(4)}>
                  5. Can I take a Home Loan for construction in one city while
                  working in another city?
                </div>
                {activeIndex === 4 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, you can take loan for construction in one city
                        while working in another. The banks usually service this
                        loan after getting details of the plot legally verified.
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className={`accordion block ${
                  activeIndex === 5 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(5)}>
                  6. Is buying property in Chennai a good investment?
                </div>
                {activeIndex === 5 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes! Chennai’s{" "}
                        <b>
                          booming infrastructure, metro expansion, and IT hubs
                        </b>{" "}
                        make real estate a safe and appreciating investment.
                        Areas like{" "}
                        <b>Mogappair, Ayanambakkam, Kolathur, and Madhavaram</b>{" "}
                        are in high demand.
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 6 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(6)}>
                  7. What are the key factors to consider when choosing a
                  location?
                </div>
                {activeIndex === 6 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        When choosing a location, consider these factors:
                        <ul>
                          <li>
                            <b>Proximity to essential services:</b> Schools,
                            hospitals, and markets.
                          </li>
                          <li>
                            <b>Connectivity: </b> Access to major roads,
                            highways, and public transport.
                          </li>
                          <li>
                            <b>Future development plans:</b> Upcoming
                            infrastructure projects like flyovers, metro
                            stations, or tech parks.
                          </li>
                          <li>
                            <b>Safety:</b> Ensure the neighbourhood is safe and
                            well-maintained.
                          </li>
                          <li>
                            <b>Resale value:</b> Look for areas with strong
                            appreciation potential.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 7 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(7)}>
                  8. Is it better to buy a plot or an apartment?
                </div>
                {activeIndex === 7 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        It depends on your goals:
                        <ul>
                          <li>
                            <b>Buy a plot</b> if you prefer customization,
                            long-term investment, and want more space.
                          </li>
                          <li>
                            <b>Buy an apartment</b> if you’re looking for
                            immediate occupancy, lower maintenance, and shared
                            amenities like security, parking, and clubhouses.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 8 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(8)}>
                  9. How do I calculate the cost of a property?
                </div>
                {activeIndex === 8 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        The total cost of a property is calculated by adding:
                        <ul>
                          <li>
                            <b>Basic price </b> (cost per square foot multiplied
                            by the area of the property).
                          </li>
                          <li>
                            <b>Stamp duty and registration charges</b>{" "}
                            (typically 7-8% of the property’s value).
                          </li>
                          <li>
                            <b>Legal and processing fees</b> (if applicable).
                          </li>
                          <li>
                            <b>Maintenance fees</b> (for apartments or gated
                            communities).
                          </li>
                          <li>
                            <b>Other miscellaneous charges</b> (like parking or
                            amenities fees).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 9 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(9)}>
                  10. What are the documents required at the time of
                  application?
                </div>
                {activeIndex === 9 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Each bank has its own list of documents that one must
                        submit at the time of application. The common documents
                        that the banks require at the pre-approval stage are:
                        <ul>
                          <li>Your business track record.</li>
                          <li>
                            Copy of audited financial statements for the last 2
                            years. If you are salaried, you need:
                          </li>
                          <li>Salary and TDS certificate</li>
                          <li>Latest pay slip</li>
                          <li>Letter from employer.</li>
                        </ul>
                        And at the disbursal stage (for property already
                        located), you need to submit the following:
                        <ul>
                          <li>Allotment letters.</li>
                          <li>Photocopies of title deeds.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-30 mb-30">Taxation FAQs </h3>
            <ul className="accordion-box clearfix">
              <li
                className={`accordion block ${
                  activeIndex === 10 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(10)}>
                  1. What is Property Tax, and how is it calculated?
                </div>
                {activeIndex === 10 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        <b>Property Tax</b> is the annual tax paid to the local
                        municipal authority (such as the Greater Chennai
                        Corporation) for owning real estate. This tax is
                        calculated based on the <b>size</b> and <b>location</b>{" "}
                        of the property.
                        <p className="mt-15">Example:</p>
                        <p>
                          Ravi owns an apartment in Anna Nagar, Chennai, with an
                          area of 1,200 sq. ft. The municipal authority assesses
                          property tax based on the{" "}
                          <b>annual rental value (ARV)</b> of the property.
                          Let’s say the ARV is ₹15,000 per year. Property tax is
                          usually a percentage of the ARV, which could be 10%.
                          So, Ravi's annual property tax would be:
                        </p>
                        <p>
                          <b>Property Tax = ARV × Tax Rate</b>
                        </p>
                        <p>
                          <b>Property Tax = ₹15,000 × 10% = ₹1,500 annually.</b>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 11 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(11)}>
                  2. What is the tax on rental income from property?
                </div>
                {activeIndex === 11 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        If you receive rental <b>income from your property,</b>{" "}
                        it is considered taxable under the Income from House
                        Property section of the Income Tax Act. You can claim{" "}
                        <b>deductions</b>
                        for expenses like repairs, maintenance, and property
                        tax.
                        <p className="mt-15">Example:</p>
                        <p>
                          Aditi rents out her 2 BHK apartment in T Nagar for
                          ₹25,000 per month. So, her annual rental income is
                          ₹300,000 (₹25,000 × 12). She incurs an annual{" "}
                          <b>property tax</b> of ₹5,000, and she spends ₹20,000
                          on repairs and maintenance. The net taxable income
                          would be:
                        </p>
                        <p>
                          <b>Net Taxable Income = Rental Income - Deductions</b>
                        </p>
                        <p>
                          <b>
                            Net Taxable Income = ₹300,000 - ₹5,000 - ₹20,000 =
                            ₹275,000.
                          </b>
                        </p>
                        <p>
                          Aditi will pay tax on ₹275,000, depending on her tax
                          bracket.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 12 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(12)}>
                  3. How does Capital Gains Tax work when selling a property?
                </div>
                {activeIndex === 12 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        <b>Capital Gains Tax</b> is levied on the profit you
                        make from selling a property. The tax is divided into{" "}
                        <b>Short-Term Capital Gains (STCG)</b> and{" "}
                        <b>Long-Term Capital Gains (LTCG)</b>
                        based on how long you hold the property.
                        <ul>
                          <li>
                            <b>Short-Term Capital Gains (STCG):</b> If you sell
                            the property within 2 years of purchase, the gains
                            are considered short-term, and are taxed at 15%.
                          </li>
                          <li>
                            <b>Long-Term Capital Gains (LTCG): </b> If you sell
                            the property within 2 years of purchase, the gains
                            are considered short-term, and are taxed at 15%.
                          </li>

                          <p className="mt-15">Example:</p>
                          <p>
                            Suman bought a plot of land for ₹50 lakh in 2018. In
                            2023, she sells it for ₹80 lakh. Her profit (capital
                            gain) is ₹30 lakh (₹80 lakh - ₹50 lakh). Since the
                            holding period is more than 2 years, this is a
                            <b>long-term capital gain.</b>
                          </p>
                          <p>
                            Suman can <b>adjust her gains for inflation</b>{" "}
                            using
                            <b>indexation</b> and pay 20% tax on the final
                            amount. Suppose the indexed cost comes out to ₹60
                            lakh after considering inflation. The{" "}
                            <b>taxable capital gain</b> would be:
                          </p>
                          <p>
                            <b>
                              Taxable Capital Gain = Selling Price - Indexed
                              Cost
                            </b>
                          </p>
                          <p>
                            <b>
                              Taxable Capital Gain = ₹80,00,000 - ₹60,00,000 =
                              ₹20,00,000
                            </b>
                          </p>
                          <p>
                            Suman will pay <b>20% tax</b> on ₹20,00,000, which
                            amounts to ₹4,00,000 as <b>LTCG tax</b>.
                          </p>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 13 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(13)}>
                  4. What is the tax deduction available for home loan
                  repayment?
                </div>
                {activeIndex === 13 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Under <b>Section 80C,</b> you can claim a deduction of
                        up to ₹1.5 lakh for <b>principal repayment</b> of your
                        home loan. Additionally, under <b>Section 24(b),</b> you
                        can claim up to ₹2 lakh per year on{" "}
                        <b>interest payments</b> for a self-occupied property.
                        <p className="mt-15">Example:</p>
                        <p>
                          Ravi has taken a home loan to buy an apartment in
                          Chennai. His annual loan repayment consists of
                          ₹1,20,000 towards the <b>principal</b> and ₹1,80,000
                          towards <b>interest</b>. Ravi can claim:
                        </p>
                        <p>
                          <b>Principal Repayment:</b> ₹1,20,000 under{" "}
                          <b>Section 80C</b>
                        </p>
                        <p>
                          <b>Interest Repayment:</b> ₹1,80,000 under{" "}
                          <b>Section 24(b)</b>
                        </p>
                        <p>
                          Therefore, Ravi can reduce his taxable income by
                          ₹3,00,000 (₹1,20,000 + ₹1,80,000).
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 14 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(14)}>
                  5. What is GST on real estate transactions?
                </div>
                {activeIndex === 14 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        GST (Goods and Services Tax) applies to the sale of
                        under-construction properties. The rate varies:
                        <ul>
                          <li>
                            <b>5% GST</b> on residential properties without
                            input tax credit (ITC).
                          </li>
                          <li>
                            <b>12% GST</b> on properties with ITC for builders
                            and developers (generally applicable to commercial
                            properties).
                          </li>
                        </ul>
                        <p className="mt-15">Example:</p>
                        <p>
                          Suman is buying a new flat in a residential complex in
                          Chennai for ₹50 lakh. Since the flat is under
                          construction, GST is applicable. The GST rate for a
                          residential property without ITC is <b>5%</b>. So, the
                          GST she needs to pay is:
                        </p>
                        <p>
                          <b>GST = Purchase Price × GST Rate</b>
                        </p>
                        <p>
                          <b>GST = ₹50,00,000 × 5% = ₹2,50,000.</b>
                        </p>
                        <p>
                          Thus, Suman will need to pay ₹2,50,000 as GST on her
                          purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 15 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(15)}>
                  6. Can I claim tax benefits for buying a second home?
                </div>
                {activeIndex === 15 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, you can claim tax benefits on a second home just
                        like you would for your first property. You can claim
                        deductions under Section 80C for principal repayment and
                        under Section 24(b) for interest payments on a home
                        loan. Additionally, if the second home is rented out,
                        the rental income will be taxable, but you can offset it
                        with deductions for expenses like interest on the home
                        loan and property maintenance.
                        <p className="mt-15">Example:</p>
                        <p>
                          Rajesh bought a second property in OMR, Chennai, and
                          took a home loan of ₹30 lakh. He pays ₹3 lakh annually
                          as principal and ₹2.4 lakh as interest. The tax
                          benefits available are:
                        </p>
                        <p>
                          <b>Principal Repayment (₹3 lakh) under Section 80C</b>
                        </p>
                        <p>
                          <b>
                            Interest Payment (₹2.4 lakh) under Section 24(b)
                          </b>
                        </p>
                        <p>
                          If the second property is rented out, he can also
                          claim deductions for rental income.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-30 mb-30">NRI FAQs</h3>
            <ul className="accordion-box clearfix">
              <li
                className={`accordion block ${
                  activeIndex === 16 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(16)}>
                  1. Can an NRI buy property in India?
                </div>
                {activeIndex === 16 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, an NRI (Non-Resident Indian) can buy property in
                        India. However, there are certain guidelines that must
                        be followed:
                        <ul>
                          <li>
                            <b>Residential properties</b> can be bought without
                            any restrictions.
                          </li>
                          <li>
                            NRIs are <b>not allowed</b> to purchase agricultural
                            land, plantation property, or farmhouses in India.
                          </li>
                        </ul>
                        <p className="mt-15">Example:</p>
                        <p>
                          An NRI, Ramesh, living in the UAE, decides to buy a
                          residential flat in Chennai. He can easily purchase
                          the flat under the same guidelines as a resident
                          Indian, provided the property is not agricultural land
                          or plantation property.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 17 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(17)}>
                  2. What are the documents required for an NRI to buy property
                  in India?
                </div>
                {activeIndex === 17 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        To buy property in India, an NRI needs the following
                        documents:
                        <ul>
                          <li>
                            <b>Valid Passport</b>
                          </li>
                          <li>
                            <b>Indian PAN card</b>
                          </li>
                          <li>
                            <b>Proof of NRI status</b> (Employment contract,
                            visa, etc.)
                          </li>
                          <li>
                            <b>Bank account details in India</b> (to make the
                            payments through the NRE or NRO account)
                          </li>
                        </ul>
                        <p className="mt-15">Example:</p>
                        <p>
                          Nidhi, an NRI living in Singapore, wants to buy a 3BHK
                          apartment in Chennai. She submits her passport, Indian
                          PAN card, and a letter from her employer in Singapore
                          proving her NRI status. Nidhi also opens an NRE
                          account in India to complete the transaction.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 18 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(18)}>
                  3. Can an NRI avail of a home loan in India?
                </div>
                {activeIndex === 18 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, NRIs can avail of home loans in India. The
                        eligibility criteria and the maximum loan amount depend
                        on the individual's income, age, and repayment capacity.
                        The loan can be repaid either from India or abroad.
                        Interest rates for NRIs might be slightly higher than
                        for residents.
                        <p className="mt-15">Example:</p>
                        <p>
                          An NRI named Arvind works in London and wants to buy a
                          flat in Kochi. He applies for a home loan of ₹50 lakh
                          through an Indian bank. After reviewing his income and
                          credit score, the bank approves his loan with an
                          interest rate of 8.5%, which is slightly higher than
                          the rate for residents.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 19 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(19)}>
                  4. How can an NRI make payments for property purchases in
                  India?
                </div>
                {activeIndex === 19 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        An NRI can make property payments through:
                        <ul>
                          <li>
                            <b>NRE or NRO accounts</b>
                          </li>
                          <li>
                            <b>Foreign Currency Non-Resident (FCNR) accounts</b>
                            <p>
                              Payments must be made in Indian Rupees. The
                              transaction should be done through banking
                              channels and not in cash.
                            </p>
                          </li>
                        </ul>
                        <p className="mt-15">Example:</p>
                        <p>
                          Simran, who lives in New York, has an NRE account in
                          India. She wants to pay the full amount of ₹45 lakh
                          for an apartment in Bangalore. Simran transfers the
                          amount from her NRE account to the developer’s
                          account, as allowed by RBI guidelines.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 20 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(20)}>
                  5. Are there any tax implications for an NRI buying property
                  in India?
                </div>
                {activeIndex === 20 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, NRIs are subject to the same property-related taxes
                        as Indian residents:
                        <ul>
                          <li>
                            <b>Property Tax:</b> Paid to local municipal
                            authorities.
                          </li>
                          <li>
                            <b>Income Tax on Rent:</b> If the NRI earns rental
                            income, it is taxable in India.
                          </li>
                          <li>
                            <b>Capital Gains Tax: </b> Applicable when selling
                            the property. NRIs are taxed at the same rates as
                            residents for <b>Short-Term Capital Gains (STCG)</b>{" "}
                            and
                            <b>Long-Term Capital Gains (LTCG)</b>. LTCG benefits
                            can be availed after 2 years of holding the
                            property, with indexation benefits.
                          </li>
                        </ul>
                        <p className="mt-15">Example:</p>
                        <p>
                          Jatin, an NRI based in Canada, owns an apartment in
                          Chennai. He rents out his property for ₹25,000 per
                          month. Jatin will pay income tax on the rental income,
                          which will be subject to tax deducted at source (TDS).
                          If Jatin sells the property, he will be taxed on any
                          capital gains.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 21 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(21)}>
                  6. How are capital gains taxed for NRIs?
                </div>
                {activeIndex === 21 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        For Short-Term Capital Gains (if the property is sold
                        within 2 years), the tax rate is 30%. For Long-Term
                        Capital Gains, the tax rate is 20% with indexation
                        benefits, which adjust the cost of acquisition for
                        inflation.
                        <p className="mt-15">Example:</p>
                        <p>
                          Maya, an NRI living in the US, bought a flat in
                          Chennai for ₹40 lakh in 2017 and sold it in 2023 for
                          ₹70 lakh. The capital gain is ₹30 lakh (₹70 lakh - ₹40
                          lakh). Since the holding period was more than 2 years,
                          this is a long-term capital gain. Maya applies
                          indexation benefits and pays 20% tax on the adjusted
                          gains.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 22 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(22)}>
                  7. What is the procedure for repatriating funds from the sale
                  of property in India?
                </div>
                {activeIndex === 22 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        NRIs can repatriate the sale proceeds (after paying
                        taxes) abroad, subject to certain conditions:
                        <ul>
                          <li>
                            The property should have been purchased with foreign
                            funds, either in foreign currency or from NRE/NRO
                            accounts.
                          </li>
                          <li>
                            NRIs can repatriate up to $1 million per year from
                            their NRO accounts, subject to compliance with tax
                            laws.
                          </li>
                        </ul>
                        <p className="mt-15">Example:</p>
                        <p>
                          An NRI, Rahul, sold his apartment in Hyderabad for ₹75
                          lakh. After deducting capital gains tax, he wants to
                          repatriate the proceeds to his NRE account in Dubai.
                          Rahul is allowed to repatriate the amount in foreign
                          currency after fulfilling all tax obligations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 23 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(23)}>
                  8. Can NRIs invest in real estate jointly with a resident
                  Indian?
                </div>
                {activeIndex === 23 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, NRIs can buy property jointly with a resident
                        Indian. The joint buyer can be a family member or a
                        relative. However, both buyers must adhere to the same
                        guidelines and are eligible for home loans, provided the
                        loan is repaid in Indian currency.
                        <p className="mt-15">Example:</p>
                        <p>
                          An NRI named Pooja is purchasing a house in Chennai
                          with her brother, who is a resident Indian. They can
                          jointly apply for a home loan, and Pooja can transfer
                          her share of the money from her NRE account.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 24 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(24)}>
                  9. Can NRIs rent out their property in India?
                </div>
                {activeIndex === 24 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, NRIs can rent out their property in India. They
                        must pay tax on the rental income they receive, and the
                        amount is subject to TDS (Tax Deducted at Source) as per
                        Indian tax laws. The rent collected can be transferred
                        to an NRE/NRO account.
                        <p className="mt-15">Example:</p>
                        <p>
                          Ravi, an NRI in the UK, rents out his 2BHK flat in
                          Chennai for ₹30,000 per month. Ravi needs to pay tax
                          on this rental income. The bank will deduct TDS before
                          transferring the balance to Ravi’s NRO account.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 25 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(25)}>
                  10. How does an NRI inherit property in India?
                </div>
                {activeIndex === 25 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        NRIs can inherit property in India from a relative.
                        There are no restrictions on property inheritance, and
                        the process is similar to that for resident Indians.
                        However, they will need to comply with Indian
                        inheritance laws, and taxes will be applicable based on
                        the type of property inherited.
                        <p className="mt-15">Example:</p>
                        <p>
                          An NRI, Anita, residing in Canada, inherits a flat in
                          Chennai from her mother. There are no legal
                          restrictions, but Anita must go through the probate
                          process (if applicable) and pay any applicable
                          inheritance taxes.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
