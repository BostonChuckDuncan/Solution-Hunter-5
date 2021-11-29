using System;
using System.Collections.Generic;
using System.IO;

namespace API.Entity 
{
    public static class Logging
    {
        // public Logging()
        // {
        // }
        public static void Log(string message)
        {
            if (IsLoggingTurnedOn())
            {
                using (StreamWriter w = File.AppendText(@"C:\Temp\UnityDashLog.txt"))
                {
                    WriteLog(message, w);
                }
            }
        }

        public static void DumpLog(int lastN)
        {
            using (StreamReader r = File.OpenText(@"C:\Temp\UnityDashLog.txt"))
            {
                DumpLog(r, lastN);
            }
        }

        public static void WriteLog(string logMessage, TextWriter w)
        {
            string msg = logMessage;
            if (IsLoggingActive(ref msg))
            {
                w.WriteLine($"Log Entry: {DateTime.Now.ToLongTimeString()} {DateTime.Now.ToLongDateString()}");
                w.WriteLine($"  :{msg}");
                w.WriteLine("-------------------------------");
            }
        }

        public static void DumpLog(StreamReader r, int lastN)
        {
            Queue<string> lines = new Queue<string>();
            string line;
            int length = 0;
            while ((line = r.ReadLine()) != null) // read entire log into queue
            {
                lines.Enqueue(line);
                length++;
            }

            // now read UP TP the lastN 4-line blocks
            for (int i = 0; i < length - (lastN * 4); i++)
            {
                line = lines.Dequeue();
            }

            for (int i = 0; i < lastN * 4; i++)
            {
                line = lines.Dequeue();
                Console.WriteLine(line);
            }
        }

        public static bool IsLoggingActive(ref string message)
        {
            int duplicatesCount = 0;
            string lastMessage = "";

            if (message == lastMessage)
            {
                duplicatesCount++;
                if (duplicatesCount == 4)
                {
                    message = "****DUPLICATES ...";
                }
                if (duplicatesCount > 4)
                {
                    return false;
                }
            }
            else
            {
                duplicatesCount = 0;
                lastMessage = message;
            }
            return true;
        }

        public static bool IsLoggingTurnedOn()
        {
            if (!File.Exists(@"C:\Temp\UnityDashLogControl.txt"))
            {
                return false;
            }
            else
            {
                System.IO.StreamReader file = new System.IO.StreamReader(@"C:\Temp\UnityDashLogControl.txt");
                string line = file.ReadLine();
                if (line != null && line.ToLower().Substring(0, 2) == "on")
                {
                    return true;
                }
            }
            return false;
        }
    }

}
