/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    {
      id: 1,
      title: "DisplayPort Cable (DP)",
      image_product: "/public/DisplayPort/image_0.jpg",
      image_info: "/public/DisplayPort/display_port_info.svg",
      general_info:
        "A DisplayPort cable is  used to connect a computer or other device to a monitor or display device. It is specifically designed to transmit video and audio signals over a single cable using the DisplayPort standard. DisplayPort cables have a unique connector with 20 or more pins and are available in different lengths to accommodate different distances between the source device and the display device. DisplayPort cables are commonly used in computer systems and can support resolutions up to 8K, high refresh rates and HDR content.They can also be used to daisy- chain multiple display devices, allowing for a multi - monitor setup without the need for multiple cables.",
      versionOrModel_id: 1,
      solution_id: 1,
      category: "cable"
    },
    {
      id: 2,
      title: "HDMI Cable",
      image_product: "/public/HDMI/image0.jpeg",
      image_info: "/public/HDMI/image0_info.svg",
      general_info:
        "HDMI means High-Definition Multimedia Interface, a standard for simultaneously transmitting digital video and audio from a source, such as a computer or TV cable box, to a computer monitor, TV or projector.Originally developed by a consortium of electronics manufacturers, it has been widely adopted with almost all televisions and computer monitors supporting the interface. The goal of the HDMI initiative back in 2002 was to improve on existing connectivity standards(e.g.DVI, component video) by creating a smaller connector, adding support for embedded audio and delivering a higher resolution video signal.Such was HDMI's success that by 2008, shipments of HDMI - enabled devices exceeded those of DVI. By the end of 2009, all HDTVs had at least one HDMI port.",
      versionOrModel_id: 2,
      solution_id: 1,
      category: "cable"
    },
    {
      id: 3,
      title: "Type C / USB-C Cable",
      image_product: "/public/Type_C/image0.jpg",
      image_info: "/public/Type_C/image0_info.svg",
      general_info:
        "Type-C is slim enough for a smartphone or tablet, yet robust enough for a laptop computer.In fact, many new laptops have eliminated USB - A and RJ45 Ethernet ports and offer USB - C as the only port for video, network, data transfer and charging.This has prompted other protocols, including Thunderbolt™ 3, DisplayPort, MHL, and HDMI, to adopt USB - C as their standard source connector.Alternate Modes allow the data pins on a USB Type - C connector to carry other types of signals.For example, DisplayPort Alt Mode(also referred to as DP Alt Mode) allows a USB - C cable to connect a DP - enabled laptop or tablet directly to a TV or computer monitor with a USB - C port.The USB - C Type 2.1 specification(announced May, 2021) increases the power capacity of cables and connectors from 100W to 240W, making it possible to power and charge larger, power - hungry devices such as 4K monitors, e - bikes and gaming laptops.",
      versionOrModel_id: 3,
      solution_id: 1,
      category: "cable"
    },
    {
      id: 4,
      title: "HDMI Cable",
      image_product: "/public/HDMI/image0.jpeg",
      image_info: "/public/HDMI/image0_info.svg",
      general_info:
        "HDMI means High-Definition Multimedia Interface, a standard for simultaneously transmitting digital video and audio from a source, such as a computer or TV cable box, to a computer monitor, TV or projector.Originally developed by a consortium of electronics manufacturers, it has been widely adopted with almost all televisions and computer monitors supporting the interface.The goal of the HDMI initiative back in 2002 was to improve on existing smaller connector, adding support for embedded audio and delivering a higher resolution video signal.Such was HDMI's success that by 2008, shipments of HDMI - enabled devices exceeded those of DVI.By the end of 2009, all HDTVs had at least one HDMI port.",
      versionOrModel_id: 4,
      solution_id: 1,
      category: "cable"
    }
  ]);
}

